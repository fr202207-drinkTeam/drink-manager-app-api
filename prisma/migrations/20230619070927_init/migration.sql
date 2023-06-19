/*
  Warnings:

  - You are about to drop the column `userId` on the `Contacts` table. All the data in the column will be lost.
  - Added the required column `author` to the `Contacts` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `author` on the `Items` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Contacts" DROP COLUMN "userId",
ADD COLUMN     "author" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Items" DROP COLUMN "author",
ADD COLUMN     "author" INTEGER NOT NULL;
