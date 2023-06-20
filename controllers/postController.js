const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// 新規投稿
exports.postAddPost = async (req, res, next) => {
  // 投稿内容取得
  const { userId, content, itemId, postImages } = req.body;
  // 画像url（文字列を）をオブジェクトに変更
  const imagePaths = [];
  postImages.map((image) => {
    imagePaths.push({ path: image });
  });
  console.log("start")
  const createPost = await prisma.post.create({
    data: {
      userId,
      content,
      // 商品選択がなかった場合(itemIdが0)はnull保存、それ以外は入力itemIdを保存
      itemId: itemId === 0 ? null : itemId,
      postImages: {
        create: imagePaths,
      },
    },
  }).catch(async(e)=> {
    await prisma.$disconnect()
    res.status(500).send("データベースへの保存に失敗しました。")
    process.exit(1)
  })
  res.status(200).send("登録に成功しました！");
}
