-- AddForeignKey
ALTER TABLE "ItemImages" ADD CONSTRAINT "ItemImages_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
