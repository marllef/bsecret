/*
  Warnings:

  - You are about to drop the column `replyId` on the `Message` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_replyId_fkey";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "replyId",
ADD COLUMN     "parentId" TEXT;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;
