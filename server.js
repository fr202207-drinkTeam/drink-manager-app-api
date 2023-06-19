// import express from "express";
const express =require("express")
const app = express();
const PORT = 50000;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require('cors');

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
//アンケートidごと
app.get("/questionnairesresult/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const questionnaires = await prisma.questionnaires.findMany({
      where: {
        id: Number(id),
      }
    });
    return res.json(questionnaires);
  } catch (error) {
    console.error(error);
  }
});

//アンケートIDごとに票を振り分け
app.get("/polls/:id", async (req, res) => {
  const id = req.params.id;
  const polls = await prisma.polls.findMany({
    where: {
      id: Number(id),
    },
  });
  return res.json(polls);
});

app.get("/questionnaires/:id", async (req, res) => {
  const id = req.params.id;
  const questionnaires = await prisma.questionnaires.findMany({
    where: {
      id: Number(id),
    },
  });
  return res.json(questionnaires);
});
app.post("/questionnaires", async (req, res) => {
  const { name, description, createdAt, category,endDate,startDate,author,polleditems} = req.body;
  const questionnaires = await prisma.questionnaires.create({
    data: {
      name,
      description,
      createdAt,
      category,
      startDate,
      endDate,
      author,
      polleditems
    },
  });
  return res.json(questionnaires);
});
app.post("/polleditems", async (req, res) => {
  const { itemId,questionnairId} = req.body;
  const questionnaires = await prisma.polleditems.create({
    data: {
      itemId,
      questionnairId,
    }
  });
  return res.json(questionnaires);
});
app.post("/poll", async (req, res) => {
  const { userId,questionnaireId,result,category,createdAt} = req.body;
  const poll = await prisma.polls.create({
    data: {
      userId,
      questionnaireId,
      result,
      category,
      createdAt
    }
  });
  return res.json(poll);
});

////
