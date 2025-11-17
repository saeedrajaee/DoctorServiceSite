-- CreateTable
CREATE TABLE "DoctorList" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "yearsOfExprience" INTEGER NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "DoctorList_pkey" PRIMARY KEY ("id")
);
