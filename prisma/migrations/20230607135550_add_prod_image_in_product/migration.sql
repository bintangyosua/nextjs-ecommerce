/*
  Warnings:

  - Added the required column `prod_image` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `prod_image` VARCHAR(191) NOT NULL;
