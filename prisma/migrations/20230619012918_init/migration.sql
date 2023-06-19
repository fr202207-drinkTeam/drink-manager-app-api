/*
  Warnings:

  - Added the required column `comfirmPassword` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "comfirmPassword" VARCHAR(16) NOT NULL;
