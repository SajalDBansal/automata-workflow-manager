-- AlterTable
ALTER TABLE "public"."AvailableAction" ADD COLUMN     "appCategoryId" TEXT;

-- AlterTable
ALTER TABLE "public"."AvailableTrigger" ADD COLUMN     "appCategoryId" TEXT;

-- CreateTable
CREATE TABLE "public"."AppCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "AppCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."AvailableAction" ADD CONSTRAINT "AvailableAction_appCategoryId_fkey" FOREIGN KEY ("appCategoryId") REFERENCES "public"."AppCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AvailableTrigger" ADD CONSTRAINT "AvailableTrigger_appCategoryId_fkey" FOREIGN KEY ("appCategoryId") REFERENCES "public"."AppCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
