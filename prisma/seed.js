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
