-- AlterTable
ALTER TABLE "User" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Mothly_pricing" (
    "id" SERIAL NOT NULL,
    "Product" INTEGER NOT NULL,
    "Product_Varient" VARCHAR(200) NOT NULL,
    "Type" VARCHAR(255) NOT NULL,
    "Year" INTEGER NOT NULL,
    "Month" VARCHAR(15) NOT NULL,
    "Date" VARCHAR(25) NOT NULL,
    "Count" INTEGER NOT NULL,
    "image" VARCHAR(100) NOT NULL,
    "created_Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Country" VARCHAR(50) NOT NULL,
    "Region" VARCHAR(25) NOT NULL,
    "USD" DECIMAL(65,30) NOT NULL,
    "Min" INTEGER NOT NULL,
    "Max" INTEGER NOT NULL,
    "Country_id" INTEGER NOT NULL,

    CONSTRAINT "Mothly_pricing_pkey" PRIMARY KEY ("id")
);
