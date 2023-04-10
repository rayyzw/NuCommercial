import { Router } from "express";
import { auth } from "../middlewares";
import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

const router = Router();

router.get("/properties", auth, async (req, res) => {
  try {
    const properties = await prismaClient.property.findMany();
    res.status(200).send(properties);
  } catch (ex) {
    console.error(ex);
    res.status(400).send(ex);
  } finally {
    prismaClient.$disconnect();
  }
});

router.get("/properties/query/:query", auth, async (req, res) => {
  try {
    const { query } = req.params;
    let queryJson = {};
    if (query) {
      queryJson = JSON.parse(query);
    }
    const properties = await prismaClient.property.findMany(queryJson);
    res.status(200).send(properties);
  } catch (ex) {
    console.error(ex);
    res.status(400).send(ex);
  } finally {
    prismaClient.$disconnect();
  }
});

router.post("/properties", auth, async (req, res) => {
  try {
    const property = await prismaClient.property.create({
      data: req.body,
    });
    res.status(200).send(property);
  } catch (ex) {
    console.error(ex);
    res.status(400).send(ex);
  } finally {
    prismaClient.$disconnect();
  }
});

router.get("/properties/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const property = await prismaClient.property.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).send(property);
  } catch (ex) {
    console.error(ex);
    res.status(400).send(ex);
  } finally {
    prismaClient.$disconnect();
  }
});

router.put("/properties/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    req.body.children = undefined;
    req.body.deals = undefined;
    const property = await prismaClient.property.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    res.status(200).send(property);
  } catch (ex) {
    console.error(ex);
    res.status(400).send(ex);
  } finally {
    prismaClient.$disconnect();
  }
});

router.delete("/properties/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    await prismaClient.property.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).send({ message: "Deleted!" });
  } catch (ex) {
    console.error(ex);
    res.status(400).send(ex);
  } finally {
    prismaClient.$disconnect();
  }
});

export default router;
