const { PrismaClient } = require("@prisma/client");
const { skip } = require("node:test");
const prisma = new PrismaClient();

// 投稿取得
exports.getPost = async (req, res, next) => {
  console.log("クエリ", req.query);
  const { category, search, quantity } = req.query;

  // 投稿の絞込み用
  let isAdmin;
  if (category === "admin") {
    isAdmin = true;
  } else if (category === "user") {
    isAdmin = false;
  }

  await prisma.post
    .findMany({
      where: {
        AND: [
          // 投稿絞込み条件
          {
            user: {
              is: {
                isAdmin,
              },
            },
          },

          // 検索条件
          {
            OR: [
              {
                content: {
                  contains: search,
                  mode: "insensitive",
                },
              },
              {
                user: {
                  is: { firstName: { contains: search, mode: "insensitive" } },
                },
              },
              {
                user: {
                  is: { lastName: { contains: search, mode: "insensitive" } },
                },
              },
              {
                item: {
                  is: { itemName: { contains: search, mode: "insensitive" } },
                },
              },
              {
                item: {
                  is: {
                    manufacturer: { contains: search, mode: "insensitive" },
                  },
                },
              },
              {
                item: {
                  is: {
                    purchaseLocation: { contains: search, mode: "insensitive" },
                  },
                },
              },
            ],
          },
        ],
      },
      orderBy: { createdAt: "desc" },
      skip: parseInt(quantity - 3),
      take: 3,
      include: {
        user: { select: { firstName: true, lastName: true, isAdmin: true } },
        item: true,
        postImages: true,
      },
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(async (e) => {
      console.log(e);
      await prisma.$disconnect();
      res.status(500).send("データの取得に失敗しました");
      process.exit(1);
    });
};

// 新規投稿
exports.addPost = async (req, res, next) => {
  // 投稿内容取得
  const { userId, content, itemId, postImages } = req.body;
  // 画像url（文字列を）をオブジェクトに変更
  const imagePaths = [];
  postImages.map((image) => {
    imagePaths.push({ path: image });
  });
  await prisma.post
    .create({
      data: {
        userId,
        content,
        // 商品選択がなかった場合(itemIdが0)はnull保存、それ以外は入力itemIdを保存
        itemId: itemId === 0 ? null : itemId,
        postImages: {
          create: imagePaths,
        },
      },
    })
    .then(() => {
      res.status(200).send("投稿に成功しました！");
    })
    .catch(async (e) => {
      await prisma.$disconnect();
      res.status(500).send("データベースへの保存に失敗しました。");
      process.exit(1);
    });
};

// 投稿編集
exports.editPost = async (req, res, next) => {
  // TODO クエリパラメータで投稿idを取得
  const postId = parseInt(req.params.postId);

  // 投稿内容取得
  const { userId, content, itemId, postImages } = req.body;

  // console.log(postId, userId, content, itemId, postImages);

  // 画像url（文字列を）をオブジェクトに変更
  const imagePaths = [];
  postImages.map((image) => {
    imagePaths.push({ path: image });
  });

  await prisma.post
    .update({
      where: { id: postId },
      data: {
        content,
        // 商品選択がなかった場合(itemIdが0)はnull保存、それ以外は入力itemIdを保存
        itemId: itemId === 0 ? null : itemId,
        // 投稿写真は枚数の変動があるため一旦削除してから新しく作成する
        postImages: {
          deleteMany: {},
          create: imagePaths,
        },
      },
    })
    .then(() => {
      res.status(200).send("投稿編集に成功しました！");
    })
    .catch(async (e) => {
      await prisma.$disconnect();
      res.status(500).send("データベースへの保存に失敗しました。");
      process.exit(1);
    });
};

// 投稿削除
exports.deletePost = async (req, res, next) => {
  const postId = parseInt(req.params.postId);
  await prisma.post
    .delete({
      where: { id: postId },
    })
    .catch(async (e) => {
      await prisma.$disconnect();
      res.status(500).send("削除に失敗しました。");
      process.exit(1);
    });
};
