/*
  Warnings:

  - Added the required column `image` to the `AppCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."AppCategory" ADD COLUMN     "image" TEXT NOT NULL;
