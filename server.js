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
  const items = await prisma.item.findMany();
  return res.json(items);
});

app.get("/posts", async (req, res) => {
  const posts = await prisma.post.findMany();
  return res.json(posts);
});

//投票//
app.get("/questionnaires", async (req, res) => {
  const questionnaires = await prisma.questionnaire.findMany();
  return res.json(questionnaires);
});

//投票カテゴリごと
app.get("/questionnaires/:category", async (req, res) => {
  try {
    const category = parseInt(req.params.category);
    const questionnaires = await prisma.questionnaire.findMany({
      where: {
        category:category,
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
    const questionnaires = await prisma.questionnaire.findMany({
      where: {
        id: Number(id),
      }
    });
    return res.json(questionnaires);
  } catch (error) {
    console.error(error);
  }
});
app.get("/pollcategory/:category", async (req, res) => {
  try {
    const category = parseInt(req.params.category);
    const polls = await prisma.poll.findMany({
      where: {
        category:category,
      }
    });
    return res.json(polls);
  } catch (error) {
    console.error(error);
  }
});

//アンケートIDごとに票を振り分け
app.get("/polls/:id", async (req, res) => {
  const id = req.params.id;
  const polls = await prisma.poll.findMany({
    where: {
      id: Number(id),
    },
  });
  return res.json(polls);
});
app.get("/pollsdata/:questionnaireId", async (req, res) => {
  const questionnaireId = parseInt(req.params.questionnaireId) ;
  const polls = await prisma.poll.findMany({
    where: {
      questionnaireId:Number(questionnaireId)
    },
  });
  return res.json(polls);
});

app.get("/questionnaires/:id", async (req, res) => {
  const id = req.params.id;
  const questionnaires = await prisma.questionnaire.findMany({
    where: {
      id: Number(id),
    },
  });
  return res.json(questionnaires);
});
app.post("/questionnaires", async (req, res) => {
  const { name, description, createdAt, category,endDate,startDate,author,polleditems} = req.body;
  const questionnaires = await prisma.questionnaire.create({
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
  const questionnaires = await prisma.polleditem.create({
    data: {
      itemId,
      questionnairId,
    }
  });
  return res.json(questionnaires);
});
app.post("/poll", async (req, res) => {
  const { userId,questionnaireId,result,category,createdAt} = req.body;
  const poll = await prisma.poll.create({
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
// user系
app.get("/user/:email", async (req, res) => {
  const email = req.params.email;
  const user = await prisma.user.findMany({
    where: {
      email,
    },
  });
  return res.json(user);
});
app.post("/user", async (req, res) => {
  const user = await prisma.user.create({
    data: req.body,
  });
  return res.json(user);
});
app.get("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id) ;
  const user = await prisma.user.findMany({
    where:{
      id: Number(id)
    }
  });
  return res.json(user);
});
app.get("/userauth/:authId", async (req, res) => {
  const authId=req.params.authId
  const users = await prisma.user.findMany({
    where:{
      authId
    }
  });
  return res.json(users);
});

///
