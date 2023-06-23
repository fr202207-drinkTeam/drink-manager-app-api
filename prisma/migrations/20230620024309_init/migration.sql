-- DropForeignKey
ALTER TABLE "Posts" DROP CONSTRAINT "Posts_itemId_fkey";

-- AlterTable
ALTER TABLE "Posts" ALTER COLUMN "itemId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items"("id") ON DELETE SET NULL ON UPDATE CASCADE;
