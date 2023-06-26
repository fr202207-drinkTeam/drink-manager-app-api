const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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
    .catch(async (e) => {
      await prisma.$disconnect();
      res.status(500).send("データベースへの保存に失敗しました。");
      process.exit(1);
    });
  res.status(200).send("投稿に成功しました！");
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
    .catch(async (e) => {
      await prisma.$disconnect();
      res.status(500).send("データベースへの保存に失敗しました。");
      process.exit(1);
    });
  res.status(200).send("投稿編集に成功しました！");
};

// 投稿削除
exports.deletePost = async (req, res, next) => {
  const postId = parseInt(req.params.postId);
  await prisma.post.delete({
    where: { id: postId },
  });
};
