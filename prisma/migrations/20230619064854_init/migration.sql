-- AlterTable
CREATE SEQUENCE itemcategories_id_seq;
ALTER TABLE "ItemCategories" ALTER COLUMN "id" SET DEFAULT nextval('itemcategories_id_seq');
ALTER SEQUENCE itemcategories_id_seq OWNED BY "ItemCategories"."id";
