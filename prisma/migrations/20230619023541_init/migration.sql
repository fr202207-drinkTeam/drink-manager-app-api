-- AlterTable
ALTER TABLE "Items" ALTER COLUMN "inTheOffice" DROP NOT NULL,
ALTER COLUMN "manufacturer" DROP NOT NULL,
ALTER COLUMN "purchaseLocation" DROP NOT NULL;
