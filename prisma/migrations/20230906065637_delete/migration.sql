/*
  Warnings:

  - You are about to drop the `books` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "books" DROP CONSTRAINT "books_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "reviews_and_ratings" DROP CONSTRAINT "reviews_and_ratings_bookId_fkey";

-- DropTable
DROP TABLE "books";
