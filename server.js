// import express from "express";
const express =require("express")
const app = express();
const PORT = 50000;
// const prisma = new PrismaClient();

app.listen(PORT, () => {
  console.log("サーバーが起動中・・・");
});