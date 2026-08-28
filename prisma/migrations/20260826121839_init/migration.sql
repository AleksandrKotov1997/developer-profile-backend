-- CreateTable
CREATE TABLE "Profile" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "description" STRING NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProfessionalLink" (
    "id" STRING NOT NULL,
    "label" STRING NOT NULL,
    "url" STRING NOT NULL,
    "sortOrder" INT4 NOT NULL,
    "profileId" STRING NOT NULL,

    CONSTRAINT "ProfessionalLink_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "ProfessionalLink_profileId_fkey"
        FOREIGN KEY ("profileId")
        REFERENCES "Profile"("id")
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "sortOrder" INT4 NOT NULL,
    "profileId" STRING NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Skill_profileId_fkey"
        FOREIGN KEY ("profileId")
        REFERENCES "Profile"("id")
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" STRING NOT NULL,
    "company" STRING NOT NULL,
    "position" STRING NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "profileId" STRING NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Experience_profileId_fkey"
        FOREIGN KEY ("profileId")
        REFERENCES "Profile"("id")
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Achievement" (
    "id" STRING NOT NULL,
    "description" STRING NOT NULL,
    "sortOrder" INT4 NOT NULL,
    "experienceId" STRING NOT NULL,

    CONSTRAINT "Achievement_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Achievement_experienceId_fkey"
        FOREIGN KEY ("experienceId")
        REFERENCES "Experience"("id")
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Project" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "url" STRING NOT NULL,
    "sortOrder" INT4 NOT NULL,
    "profileId" STRING NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Project_profileId_fkey"
        FOREIGN KEY ("profileId")
        REFERENCES "Profile"("id")
        ON DELETE CASCADE
        ON UPDATE CASCADE
);