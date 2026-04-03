-- CreateTable
CREATE TABLE "product" (
    "productId" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "price" DOUBLE PRECISION,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "imageUrl" TEXT,
    "productCatId" INTEGER NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "productCategory" (
    "productCatID" SERIAL NOT NULL,
    "produtCatname" TEXT,

    CONSTRAINT "productCategory_pkey" PRIMARY KEY ("productCatID")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_productName_key" ON "product"("productName");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_productCatId_fkey" FOREIGN KEY ("productCatId") REFERENCES "productCategory"("productCatID") ON DELETE RESTRICT ON UPDATE CASCADE;
