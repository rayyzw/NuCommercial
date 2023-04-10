import { Router, Request, Response } from "express";
import nodemailer from 'nodemailer';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { auth } from '../middlewares';
import { JwtPayload } from '../interfaces';
import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();
const router = Router();

router.get('/users', auth, async (req: Request, res: Response)=>{
  try{
    const users = await prismaClient.user.findMany();
    res.status(200).send(users);
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.get('/users/query/:query', auth, async (req: Request, res: Response)=>{
  try{
    const { query } = req.params;
    let queryJson = {};
    if(query){
      queryJson = JSON.parse(query);
    }
    const users = await prismaClient.user.findMany(queryJson);
    res.status(200).send(users);
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.post('/users', auth, async (req: Request, res: Response)=>{
  try{
    const { name, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashed = await bcrypt.hash(password, salt);
    req.body.salt = salt;
    req.body.password = hashed;
    const user = await prismaClient.user.create({      
      data: {
        name: name,
        email: email,
        password: hashed,
        salt: salt,
      }
    });
    res.status(200).send(user);
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.get('/users/:id', auth, async (req: Request, res: Response)=>{
  try{
    const { id } = req.params;
    const user = await prismaClient.user.findFirst({
      where: {
        id: parseInt(id),
      }
    });
    res.status(200).send(user);
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.put('/users/:id', auth, async (req: Request, res: Response)=>{
  try{
    const { id } = req.params;
    const user = await prismaClient.user.update({
      where: { id: parseInt(id) },
      data: req.body
    });
    res.status(200).send(user);
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.delete('/users/:id', auth, async (req: Request, res: Response)=>{
  try{
    const { id } = req.params;
    await prismaClient.user.delete({
      where: {
        id: parseInt(id),
      }
    });
    res.status(200).send({"message":"Deleted!"});
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.post('/login', async (req: Request, res: Response)=>{
  try{
    const { email, password } = req.body;
    if(!email || !password){
      res.status(400).send({"message":"Email and Password are required!"});
      return;
    }
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    });
    if(user && user.password){
      if(bcrypt.compareSync(password, user.password)){
        user.password = "";
        user.salt = "";
        const token = jwt.sign({id:user.id,email:user.email}, process.env.SECRET as string, { expiresIn: '7d' });
        res.status(200).send({...user,token:token});
      }
      else{
        res.status(400).send({"password":"Incorrect Password!"});
      }
    }
    else{
      res.status(400).send({"email":"Incorrect Email!"});
    }
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.post('/register', async (req: Request, res: Response)=>{
  try{
    const { name, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashed = await bcrypt.hash(password, salt);
    const existUsers = await prismaClient.user.findMany({
      where: { email: email} 
    });
  
    if (existUsers.length === 0){
      const user = await prismaClient.user.create({
        data: {
          name: name,
          email: email,
          password: hashed,
          salt: salt,
        }
      });
      res.status(200).send(user);
    }
    else{
      res.status(400).send({"email":"Email exists!"});
    }
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.get('/profile', auth, async (req: Request, res: Response)=>{
  try{
    const decoded = jwt.verify(String(req.headers.token),process.env.SECRET as string) as JwtPayload;
    const user = await prismaClient.user.findFirst({
      where: {
        id: decoded.id,
        email: decoded.email,
      }
    });
    if(user){
      user.password = "";
      user.salt = "";
      res.status(200).send({...user,token:req.headers.token});
    }
    else{
      res.status(400).send("Profile not found!"); 
    }
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.put('/profile', auth, async (req: Request, res: Response)=>{
  try{
    const decoded = jwt.verify(String(req.headers.token),process.env.SECRET as string) as JwtPayload;
    req.body.token  = undefined;
    const user = await prismaClient.user.update({
      where: {
        id: decoded.id,
      },
      data: req.body
    });
    if(user){
      user.password = "";
      user.salt = "";
      res.status(200).send({...user,token:req.headers.token});
    }
    else{
      res.status(400).send("Profile not found!"); 
    }
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.get('/resetPassword', async (req: Request, res: Response)=>{
  try{
    const { email } = req.query;
    if(email){
      const user = await prismaClient.user.findFirst({
        where: { email: email as string} 
      });

      if (user){
        user.resetToken = Math.random().toString(36).slice(2);
        await prismaClient.user.update({
          where: { id: user.id },
          data: user
        });
        
        try{
          let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASSWORD,
            },
            logger: true
          });
          
          let info = await transporter.sendMail({
            from: process.env.SMTP_SENDER,
            to: email as string,
            subject: "Reset Password",
            text: "Hello world?",
            html: req.headers.referer + "?token=" + user.resetToken,
            headers: {}
          });        
          console.log("Message sent: %s", info.response);
        }
        catch(ex){
          console.error(ex);
        }
        console.log(user.resetToken);
        res.status(200).send(user.resetToken);
      }
      else{
        res.status(404).send({"email":"User not found!"});
      }
    }
    else{
      res.status(400).send({"email":"Email is required!"});
    }
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.post('/resetPassword', async (req: Request, res: Response)=>{
  try{
    const { userToken, password } = req.body;

    const user = await prismaClient.user.findFirst({
      where: { 
        resetToken: userToken
      }
    });

    if(user){
      const hashed = await bcrypt.hash(password, 8);
      await prismaClient.user.update({
        where: { id: user.id },
        data: {password:hashed, resetToken:null}
      });
      res.status(200).send({"password":"Password changed!"});
    }
    else{
      res.status(400).send({"token":"Token expired!"});
    }
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

export default router;