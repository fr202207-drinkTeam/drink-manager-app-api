/*
  Warnings:

  - You are about to drop the column `comfirmPassword` on the `User` table. All the data in the column will be lost.
  - Added the required column `confirmPassword` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "comfirmPassword",
ADD COLUMN     "confirmPassword" VARCHAR(16) NOT NULL;
