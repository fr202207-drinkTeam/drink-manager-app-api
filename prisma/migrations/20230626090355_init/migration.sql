-- CreateTable
CREATE TABLE "Questionnaires" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "author" INTEGER NOT NULL,

    CONSTRAINT "Questionnaires_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PolledItems" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "questionnairId" INTEGER NOT NULL,

    CONSTRAINT "PolledItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Polls" (
    "id" SERIAL NOT NULL,
    "questionnaireId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "result" INTEGER NOT NULL,
    "category" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Polls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(10) NOT NULL,
    "lastName" VARCHAR(10) NOT NULL,
    "email" VARCHAR(40) NOT NULL,
    "password" VARCHAR(16) NOT NULL,
    "confirmPassword" VARCHAR(16) NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "authId" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "itemName" VARCHAR(18) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "itemCategory" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "inTheOffice" BOOLEAN,
    "author" INTEGER NOT NULL,
    "approval" BOOLEAN NOT NULL,
    "manufacturer" TEXT,
    "purchaseLocation" TEXT,
    "pollItem" BOOLEAN NOT NULL,
    "isDiscontinued" BOOLEAN NOT NULL,

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "itemId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostImages" (
    "id" SERIAL NOT NULL,
    "postId" INTEGER NOT NULL,
    "path" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PostImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Likes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StockHistories" (
    "id" SERIAL NOT NULL,
    "itamId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "incOrDec" BOOLEAN NOT NULL,
    "stockAmount" INTEGER NOT NULL,

    CONSTRAINT "StockHistories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ItemCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemImages" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "imagePath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ItemImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Banners" (
    "id" SERIAL NOT NULL,
    "category" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" INTEGER NOT NULL,

    CONSTRAINT "Banners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contacts" (
    "id" SERIAL NOT NULL,
    "author" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "content" VARCHAR(500) NOT NULL,

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Items_itemName_key" ON "Items"("itemName");

-- CreateIndex
CREATE UNIQUE INDEX "ItemCategories_name_key" ON "ItemCategories"("name");

-- AddForeignKey
ALTER TABLE "PolledItems" ADD CONSTRAINT "PolledItems_questionnairId_fkey" FOREIGN KEY ("questionnairId") REFERENCES "Questionnaires"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Polls" ADD CONSTRAINT "Polls_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaires"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostImages" ADD CONSTRAINT "PostImages_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemImages" ADD CONSTRAINT "ItemImages_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
