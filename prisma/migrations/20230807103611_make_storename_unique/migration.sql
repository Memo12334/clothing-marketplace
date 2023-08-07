/*
  Warnings:

  - The `images` column on the `Item` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[name]` on the table `Store` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "images",
ADD COLUMN     "images" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "Store_name_key" ON "Store"("name");
