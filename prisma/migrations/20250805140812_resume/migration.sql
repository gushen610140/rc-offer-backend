/*
  Warnings:

  - Added the required column `class` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `major` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skills` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `Resume` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wechat_number` to the `Resume` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Resume" ADD COLUMN     "certifications" TEXT,
ADD COLUMN     "class" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "extra_info" TEXT,
ADD COLUMN     "github" TEXT,
ADD COLUMN     "honor" TEXT,
ADD COLUMN     "language" TEXT,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "major" TEXT NOT NULL,
ADD COLUMN     "phone_number" TEXT NOT NULL,
ADD COLUMN     "project_experience" TEXT,
ADD COLUMN     "skills" TEXT NOT NULL,
ADD COLUMN     "summary" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "website" TEXT,
ADD COLUMN     "wechat_number" TEXT NOT NULL;
