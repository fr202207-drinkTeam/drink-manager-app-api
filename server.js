// import express from "express";
const express = require("express");
const app = express();
const PORT = 50000;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require("cors");

// CORS設定
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("サーバーが起動中・・・");
});

app.get("/items", async (req, res) => {
  const items = await prisma.items.findMany();
  return res.json(items);
});

app.get("/posts", async (req, res) => {
  const posts = await prisma.posts.findMany();
  return res.json(posts);
});

//投票//
app.get("/questionnaires", async (req, res) => {
  const questionnaires = await prisma.questionnaires.findMany();
  return res.json(questionnaires);
});
//投票カテゴリごと
app.get("/questionnaires/:category", async (req, res) => {
  try {
    const category = parseInt(req.params.category);
    const questionnaires = await prisma.questionnaires.findMany({
      where: {
        category: category,
      },
      include: {
        Polleditems: true,
      },
    });
    return res.json(questionnaires);
  } catch (error) {
    console.error(error);
  }
});
app.get("/polls/:id", async (req, res) => {
  const id = req.params.id;
  const polls = await prisma.polls.findMany({
    where: {
      questionnaireId: Number(id),
    },
  });
  return res.json(polls);
});

////
