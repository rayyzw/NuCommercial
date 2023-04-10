import { Router, Request, Response } from "express";
import nodemailer from "nodemailer";
import { auth } from "../middlewares";
const router = Router();

router.post("/mail", auth, async (req: Request, res: Response) => {
  try {
    const { subject, text, html, from, to, cc, bcc } = req.body;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      logger: true,
    });
    const info = await transporter.sendMail({
      from,
      to,
      cc,
      bcc,
      subject,
      text,
      html,
    });
    console.log("Message sent: %s", info.response);
    res.status(200).send({message:"Sent"});
  } catch (ex) {
    console.error(ex);
    res.status(400).send({error:"Failed"});
  }
});

export default router;
