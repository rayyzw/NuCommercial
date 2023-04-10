import { Router } from "express";
import { auth } from '../middlewares';
import { PrismaClient } from '@prisma/client';
const prismaClient = new PrismaClient();

const router = Router();

router.get('/realtors', auth, async (req, res)=>{
  try{
    const realtors = await prismaClient.realtor.findMany();
    res.status(200).send(realtors);
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.get('/realtors/query/:query', auth, async (req, res)=>{
  try{
    const { query } = req.params;
    let queryJson = {};
    if(query){
      queryJson = JSON.parse(query);
    }
    const realtors = await prismaClient.realtor.findMany(queryJson);
    res.status(200).send(realtors);
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.post('/realtors', auth, async (req, res)=>{
  try{
    const realtor = await prismaClient.realtor.create({
      data: req.body
    });
    res.status(200).send(realtor);
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.get('/realtors/:id', auth, async (req, res)=>{
  try{
    const { id } = req.params;
    const realtor = await prismaClient.realtor.findFirst({
      where: {
        id: parseInt(id),
      }
    });
    res.status(200).send(realtor);
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.put('/realtors/:id', auth, async (req, res)=>{
  try{
    const { id } = req.params;
    req.body.children = undefined;
    req.body.deals = undefined;
    const realtor = await prismaClient.realtor.update({
      where: { id: parseInt(id) },
      data: req.body
    });
    res.status(200).send(realtor);
  }
  catch(ex){
    console.error(ex);
    res.status(400).send(ex); 
  }
  finally{
    prismaClient.$disconnect();
  }
});

router.delete('/realtors/:id', auth, async (req, res)=>{
  try{
    const { id } = req.params;
    await prismaClient.realtor.delete({
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

export default router;