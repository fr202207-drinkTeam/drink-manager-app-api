// import express from "express";
const express =require("express")
const app = express();
const PORT = 50000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
app.use(express.json());


app.listen(PORT, () => {
  console.log("サーバーが起動中・・・");
});

app.get("/items", async (req, res) => {
  const items = await prisma.items.findMany();
  return res.json(items);
});

