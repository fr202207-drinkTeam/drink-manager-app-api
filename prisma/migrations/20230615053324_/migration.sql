/*
  Warnings:

  - A unique constraint covering the columns `[questionnairId]` on the table `Polleditems` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Polleditems_questionnairId_key" ON "Polleditems"("questionnairId");

-- AddForeignKey
ALTER TABLE "Polleditems" ADD CONSTRAINT "Polleditems_questionnairId_fkey" FOREIGN KEY ("questionnairId") REFERENCES "Questionnaires"("id") ON DELETE CASCADE ON UPDATE CASCADE;
