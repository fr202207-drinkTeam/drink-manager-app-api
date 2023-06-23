/*
  Warnings:

  - You are about to drop the column `name` on the `Items` table. All the data in the column will be lost.
  - You are about to drop the column `category` on the `Polls` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[itemName]` on the table `Items` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `itemName` to the `Items` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Items_name_key";

-- AlterTable
ALTER TABLE "Items" DROP COLUMN "name",
ADD COLUMN     "itemName" VARCHAR(18) NOT NULL;

-- AlterTable
ALTER TABLE "Polls" DROP COLUMN "category";

-- CreateIndex
CREATE UNIQUE INDEX "Items_itemName_key" ON "Items"("itemName");
