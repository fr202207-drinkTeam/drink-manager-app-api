const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const taro = await prisma.user.upsert({
    where: { email: "example1@rakus-partners.co.jp" },
    update: {},
    create: {
      firstName: "テスト",
      lastName: "太郎",
      email: "example1@rakus-partners.co.jp",
      password: "Example1",
      confirmPassword: "Example1",
      authId: "lx3GELGo9kbsM1NxkhaHMU08ISa2",
      isAdmin: true,
    },
  });

  const hanako = await prisma.user.upsert({
    where: { email: "example2@rakus-partners.co.jp" },
    update: {},
    create: {
      firstName: "テスト",
      lastName: "花子",
      email: "example2@rakus-partners.co.jp",
      password: "Example2",
      confirmPassword: "Example2",
      authId: "WzbFGHPVSqO8JwOfOr89xD6JsDH2",
      isAdmin: false,
    },
  });
  //投票
  await prisma.questionnaire.create({
    data: {
      id:1,
      name:"テストテスト",
      description:"テストです。",
      createdAt:new Date(),
      category:1,
      startDate:"2023-05-10T08:16:34.851Z",
      endDate:"2023-05-30T08:16:34.851Z",
      author:1,
    },
  });
  await prisma.questionnaire.create({
    data: {
      id:2,
      name:"テストテスト2",
      description:"テストです。",
      createdAt:new Date(),
      category:2,
      startDate:"2023-06-01T08:16:34.851Z",
      endDate:"2023-06-30T08:16:34.851Z",
      author:1,
    },
  });
  await prisma.questionnaire.create({
    data: {
      id:3,
      name:"テストテスト3",
      description:"テストです。",
      createdAt:new Date(),
      category:1,
      startDate:"2023-06-01T08:16:34.851Z",
      endDate:"2023-06-30T08:16:34.851Z",
      author:1,
    },
  });
  await prisma.questionnaire.create({
    data: {
      id:4,
      name:"テストテスト4",
      description:"テストです。",
      createdAt:new Date(),
      category:1,
      startDate:"2023-07-01T08:16:34.851Z",
      endDate:"2023-07-30T08:16:34.851Z",
      author:1,
    },
  });
  await prisma.questionnaire.create({
    data: {
      id:5,
      name:"テストテスト5",
      description:"テストです。",
      createdAt:new Date(),
      category:2,
      startDate:"2023-07-01T08:16:34.851Z",
      endDate:"2023-07-30T08:16:34.851Z",
      author:1,
    },
  });
  await prisma.questionnaire.create({
    data: {
      id:6,
      name:"テストテスト6",
      description:"テストです。",
      createdAt:new Date(),
      category:2,
      startDate:"2023-08-01T08:16:34.851Z",
      endDate:"2023-08-30T08:16:34.851Z",
      author:1,
    },
  });
  await prisma.questionnaire.create({
    data: {
      id:7,
      name:"テストテスト7",
      description:"テストです。",
      createdAt:new Date(),
      category:2,
      startDate:"2023-10-01T08:16:34.851Z",
      endDate:"2023-10-30T08:16:34.851Z",
      author:1,
    },
  });
  await prisma.polledItem.create({
    data: {
      id:1,
      itemId:4,//既存itemIdに後で変更
      questionnairId:3
    },
  });
  await prisma.polledItem.create({
    data: {
      id:2,
      itemId:5,//既存itemIdに後で変更
      questionnairId:2
    },
  });
  await prisma.polledItem.create({
    data: {
      id:3,
      itemId:5,//既存itemIdに後で変更
      questionnairId:3
    },
  });
  await prisma.polledItem.create({
    data: {
      id:4,
      itemId:4,//既存itemIdに後で変更
      questionnairId:2
    },
  });
  await prisma.polledItem.create({
    data: {
      id:5,
      itemId:5,//既存itemIdに後で変更
      questionnairId:1
    },
  });
  await prisma.polledItem.create({
    data: {
      id:6,
      itemId:4,//既存itemIdに後で変更
      questionnairId:1
    },
  });
  await prisma.poll.create({
    data: {
      userId:2,
      questionnaireId:2,
      result:4,
      category:1,
      createdAt:new Date()
    },
  });
  await prisma.poll.create({
    data: {
      userId:2,
      questionnaireId:2,
      result:5,
      category:1,
      createdAt:new Date()
    },
  });
  await prisma.poll.create({
    data: {
      userId:2,
      questionnaireId:1,
      result:4,
      category:1,
      createdAt:new Date()
    },
  });
  await prisma.poll.create({
    data: {
      userId:2,
      questionnaireId:1,
      result:5,
      category:1,
      createdAt:new Date()
    },
  });
//
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });

// model Users {
//   id    Int     @id @default(autoincrement())
//   firstName String @db.VarChar(10)
//   lastName String @db.VarChar(10)
//   email String @unique @db.VarChar(40)
//   password String @db.VarChar(16)
//   isAdmin Boolean
//   authId String
// }

// model Posts {
//   id    Int     @id @default(autoincrement())
//   userId Int
//   content String @db.VarChar(255)
//   itemId Int
//   createdAt DateTime  @default(now()) @map(name: "created_at")
//   updatedAt DateTime  @updatedAt @map(name: "updated_at")
// }
