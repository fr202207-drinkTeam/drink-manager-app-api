/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `ItemCategories` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ItemCategories_name_key" ON "ItemCategories"("name");
