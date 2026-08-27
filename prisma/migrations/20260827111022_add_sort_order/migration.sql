/*
  Warnings:

  - Added the required column `sortOrder` to the `Achievement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sortOrder` to the `ProfessionalLink` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sortOrder` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sortOrder` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Achievement" ADD COLUMN     "sortOrder" INT4 NOT NULL;

-- AlterTable
ALTER TABLE "ProfessionalLink" ADD COLUMN     "sortOrder" INT4 NOT NULL;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "sortOrder" INT4 NOT NULL;

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "sortOrder" INT4 NOT NULL;
