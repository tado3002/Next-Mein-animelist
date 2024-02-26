-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "anime_title" TEXT NOT NULL,
    "anime_image" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "added_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "anime_title" TEXT NOT NULL,
    "user_image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rating" INTEGER,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collection_user_email_mal_id_key" ON "Collection"("user_email", "mal_id");
