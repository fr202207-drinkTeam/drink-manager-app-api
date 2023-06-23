/*
  Warnings:

  - You are about to drop the column `created_at` on the `Items` table. All the data in the column will be lost.
  - Added the required column `approval` to the `Items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Items" DROP COLUMN "created_at",
ADD COLUMN     "approval" BOOLEAN NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "manufacturer" INTEGER,
ADD COLUMN     "purchaseLocation" INTEGER,
ALTER COLUMN "inTheOffice" DROP NOT NULL,
ALTER COLUMN "author" SET DATA TYPE TEXT;
