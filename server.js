// import express from "express";
const express = require("express");
const app = express();
const PORT = 50000;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const cors = require("cors");
const postController = require("./controllers/postController");

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

// 投稿取得
app.get("/posts", postController.getPost)

// 新規投稿
app.post("/posts", postController.addPost);

// 投稿編集
app.patch("/posts/:postId", postController.editPost);

// 投稿削除
app.delete("/posts/:postId", postController.deletePost);

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
    const questionnaires = await prisma.questionnaire.findMany({
      where: {
        id: Number(id),
      },
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
        category: category,
      },
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
  const questionnaireId = parseInt(req.params.questionnaireId);
  const polls = await prisma.poll.findMany({
    where: {
      questionnaireId: Number(questionnaireId),
    },
  });
  return res.json(polls);
});

// id条件で商品を取得
app.get("/items/:id", async (req, res) => {
  const id = req.params.id;
  const item = await prisma.item.findMany({
    where: {
      id: Number(id),
    },
  });
  return res.json(item);
});

// id条件で商品情報と商品画像を取得
app.get("/getItemData/:id", async (req, res) => {
  const id = Number(req.params.id);
  const item = await prisma.item.findUnique({
    where: {
      id: id,
    },
    include: {
      images: true,
    },
  });

  return res.json(item);
});

// 商品名条件で商品を取得
app.get("/itemName/:name", async (req, res) => {
  const name = req.params.name;
  const items = await prisma.item.findMany({
    where: {
      itemName: {
        equals: name,
      },
    },
  });
  return res.json(items);
});

// 商品追加
app.post("/items", async (req, res) => {
  const item = await prisma.item.create({
    data: req.body,
  });
  return res.json(item);
});

// 商品の廃盤
app.put("/discontinuedItem/:id", async (req, res) => {
  const id = req.params.id;

  const result = await prisma.item.update({
    where: { id: Number(id) },
    data: {
      isDiscontinued: true,
    },
  });

  res.json(result);
});

// 商品更新
app.put("/itemedit/:id", async (req, res) => {
  const id = req.params.id;
  const {
    itemName,
    description,
    itemCategory,
    inTheOffice,
    author,
    approval,
    manufacturer,
    purchaseLocation,
    images,
  } = req.body;
  images.map((image) => {
    return (
      {
          where: { itemId: id },
          data: { imagePath: image }
        }
    )
  });

  const result = await prisma.item.update({
    where: { id: Number(id) },
    data: {
      itemName: itemName,
      description: description,
      itemCategory: itemCategory,
      inTheOffice: inTheOffice,
      author: author,
      approval: approval,
      manufacturer: manufacturer,
      purchaseLocation: purchaseLocation,
      images: {
        updateMany: images
      },
    },
  });

  res.json(result);
});

// 商品追加
app.post("/additem", async (req, res) => {
  const {
    itemName,
    description,
    itemCategory,
    createdAt,
    inTheOffice,
    author,
    approval,
    manufacturer,
    purchaseLocation,
    pollItem,
    isDiscontinued,
    images,
  } = req.body;
  images.map((image) => {
    return { imagePath: image };
  });

  const item = await prisma.item.create({
    data: {
      itemName,
      description,
      itemCategory,
      createdAt,
      inTheOffice,
      author,
      approval,
      manufacturer,
      purchaseLocation,
      pollItem,
      isDiscontinued,
      images: {
        create: images,
      },
    },
  });
  return res.json(item);
});

// 社内ありでお菓子以外の商品取得
app.get("/intheofficeitems", async (req, res) => {
  const items = await prisma.item.findMany({
    where: {
      inTheOffice: true,
      NOT: {
        itemCategory: 8
      }
    },
    include: {
      stock: true,
    },
  });
  return res.json(items);
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
  const {
    name,
    description,
    createdAt,
    category,
    endDate,
    startDate,
    author,
    polleditems,
  } = req.body;
  const questionnaires = await prisma.questionnaire.create({
    data: {
      name,
      description,
      createdAt,
      category,
      startDate,
      endDate,
      author,
      polleditems,
    },
  });
  return res.json(questionnaires);
});
app.post("/polleditems", async (req, res) => {
  const { itemId, questionnairId } = req.body;
  const questionnaires = await prisma.polleditem.create({
    data: {
      itemId,
      questionnairId,
    },
  });
  return res.json(questionnaires);
});
app.post("/poll", async (req, res) => {
  const { userId, questionnaireId, result, category, createdAt } = req.body;
  const poll = await prisma.poll.create({
    data: {
      userId,
      questionnaireId,
      result,
      category,
      createdAt,
    },
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
  console.log("here", user)
  return res.json(user);
});
app.post("/user", async (req, res) => {
  const user = await prisma.user.create({
    data: req.body,
  });
  return res.json(user);
});
app.get("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await prisma.user.findMany({
    where: {
      id: Number(id),
    },
  });
  return res.json(user);
});
app.get("/userauth/:authId", async (req, res) => {
  const authId = req.params.authId;
  const users = await prisma.user.findMany({
    where: {
      authId,
    },
  });
  return res.json(users);
});

///
