/*
  Warnings:

  - You are about to alter the column `prod_desc` on the `product` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `prod_desc` VARCHAR(191) NOT NULL;
