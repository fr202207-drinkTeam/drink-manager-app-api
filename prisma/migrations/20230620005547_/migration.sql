-- AddForeignKey
ALTER TABLE "Polls" ADD CONSTRAINT "Polls_questionnaireId_fkey" FOREIGN KEY ("questionnaireId") REFERENCES "Questionnaires"("id") ON DELETE CASCADE ON UPDATE CASCADE;
