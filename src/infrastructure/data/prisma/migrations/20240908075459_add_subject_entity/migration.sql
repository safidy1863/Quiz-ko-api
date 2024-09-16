-- CreateTable
CREATE TABLE "Subject" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SubjectQuestions" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SubjectQuestions_AB_unique" ON "_SubjectQuestions"("A", "B");

-- CreateIndex
CREATE INDEX "_SubjectQuestions_B_index" ON "_SubjectQuestions"("B");

-- AddForeignKey
ALTER TABLE "_SubjectQuestions" ADD CONSTRAINT "_SubjectQuestions_A_fkey" FOREIGN KEY ("A") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SubjectQuestions" ADD CONSTRAINT "_SubjectQuestions_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
