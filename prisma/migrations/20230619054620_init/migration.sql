/*
  Warnings:

  - You are about to drop the column `created_at` on the `Banners` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Comments` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Items` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Likes` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Likes` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Polls` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Questionnaires` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `StockHistories` table. All the data in the column will be lost.
  - You are about to drop the `Images` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `Comments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Likes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Banners" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Comments" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Contacts" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Items" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Likes" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Polls" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Questionnaires" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "StockHistories" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Images";

-- CreateTable
CREATE TABLE "ItemImages" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "imagePath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ItemImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostImages" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "imagePath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PostImages_pkey" PRIMARY KEY ("id")
);
