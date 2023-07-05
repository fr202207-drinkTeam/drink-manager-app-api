/*
  Warnings:

  - You are about to drop the column `itamId` on the `StockHistories` table. All the data in the column will be lost.
  - Added the required column `itemId` to the `StockHistories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StockHistories" DROP COLUMN "itamId",
ADD COLUMN     "itemId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "StockHistories" ADD CONSTRAINT "StockHistories_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
