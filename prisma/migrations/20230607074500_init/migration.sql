/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Polls` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Questionnaires` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Polls" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Questionnaires" DROP COLUMN "createdAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(10) NOT NULL,
    "lastName" VARCHAR(10) NOT NULL,
    "email" VARCHAR(40) NOT NULL,
    "password" VARCHAR(16) NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "authId" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(18) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "itemCategory" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "inTheOffice" BOOLEAN NOT NULL,
    "author" INTEGER NOT NULL,
    "pollItem" BOOLEAN NOT NULL,
    "isDiscontinued" BOOLEAN NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "itemId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Likes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StockHistory" (
    "id" SERIAL NOT NULL,
    "itamId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "incOrDec" BOOLEAN NOT NULL,
    "stockAmount" INTEGER NOT NULL,

    CONSTRAINT "StockHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ItemCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "itemOrPost" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Banners" (
    "id" SERIAL NOT NULL,
    "category" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" INTEGER NOT NULL,

    CONSTRAINT "Banners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conntacts" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "content" VARCHAR(500) NOT NULL,

    CONSTRAINT "Conntacts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Items_name_key" ON "Items"("name");
