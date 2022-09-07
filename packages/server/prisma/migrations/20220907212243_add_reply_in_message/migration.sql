/*
  Warnings:

  - Made the column `text` on table `Message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fromId` on table `Message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `toId` on table `Message` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_fromId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_toId_fkey";

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "replyId" TEXT,
ALTER COLUMN "text" SET NOT NULL,
ALTER COLUMN "fromId" SET NOT NULL,
ALTER COLUMN "toId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_toId_fkey" FOREIGN KEY ("toId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_replyId_fkey" FOREIGN KEY ("replyId") REFERENCES "Message"("id") ON DELETE SET NULL ON UPDATE CASCADE;
