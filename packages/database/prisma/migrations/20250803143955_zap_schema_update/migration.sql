-- CreateEnum
CREATE TYPE "public"."ZapStatus" AS ENUM ('PENDING', 'ACTIVE', 'PAUSED', 'ERROR', 'DELETED');

-- AlterTable
ALTER TABLE "public"."Zap" ADD COLUMN     "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "lastRun" TEXT,
ADD COLUMN     "name" TEXT DEFAULT 'Untitled Zap',
ADD COLUMN     "status" "public"."ZapStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "tasks" INTEGER;
