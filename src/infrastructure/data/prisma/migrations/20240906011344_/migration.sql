/*
  Warnings:

  - Made the column `gender` on table `Student` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "gender" SET NOT NULL;
