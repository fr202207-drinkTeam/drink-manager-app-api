const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.postAddPost = async (req, res) => {
  console.log("body", req.body);
  const { userId, content, itemId, postImages } = req.body;
  const imagePaths = [];
  postImages.map((image) => {
    imagePaths.push({ path: image });
  });
  const createPost = await prisma.post.create({
    data: {
      userId: userId,
      content: content,
      itemId: itemId,
      postImages: {
        create: imagePaths,
      },
    },
  });
  res.status(200).send("登録に成功しました！");
};
