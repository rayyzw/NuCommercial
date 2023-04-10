import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { JwtPayload } from './interfaces';

const prismaClient = new PrismaClient();

export async function auth(req: Request, res:Response, next: () => void) {  
  next();

  // let logined = false;
  // try{      
  //   const decoded = jwt.verify(String(req.headers.token),process.env.SECRET as string) as JwtPayload;
  //   const user = await prismaClient.user.findFirst({
  //     where: {
  //       id: decoded.id,
  //       email: decoded.email,
  //     }
  //   });
  //   if(user){
  //     logined = true;
  //   }
  // }
  // catch(ex){
  //   console.log(ex);
  // }
  // finally{
  //   prismaClient.$disconnect();
  // }

  // if(logined){
  //   next();
  // }
  // else{
  //   res.status(403).json({message: "Forbidden"});
  // }
}


export async function log(req: Request, res:Response, next: () => void) {
  console.log(req.headers['x-forwarded-for'] || req.socket.remoteAddress, req.method, req.url, new Date());
  next();
}