/*
  Warnings:

  - You are about to drop the column `itemId` on the `Posts` table. All the data in the column will be lost.
  - Added the required column `approval` to the `Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manufacturer` to the `Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchaseLocation` to the `Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drinkId` to the `Posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `snackId` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Items" ADD COLUMN     "approval" BOOLEAN NOT NULL,
ADD COLUMN     "manufacturer" VARCHAR(18) NOT NULL,
ADD COLUMN     "purchaseLocation" VARCHAR(18) NOT NULL;

-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "itemId",
ADD COLUMN     "drinkId" INTEGER NOT NULL,
ADD COLUMN     "snackId" INTEGER NOT NULL;
