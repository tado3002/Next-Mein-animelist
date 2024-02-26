import CommentBox from "@/components/AnimeList/CommentBox";
import Header from "@/components/AnimeList/Header";
import PrevPage from "@/components/Utilities/PrevPage";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <div className="container mx-auto py-16 flex flex-col px-2 gap-8">
      <div className="flex justify-between items-center">
        <PrevPage />
        <Header linkHref={""} title={"Komentar kamu"} />
      </div>
      <div className="flex flex-col gap-2 w-full md:w-2/3">
        {comments?.map((comment, index) => {
          return (
            <div className="flex flex-col gap-2" key={index}>
              <h3 className="font-semibold text-base md:text-lg pb-3 w-full flex flex-row justify-between">
                <span>Comment on :</span>
                <span className="italic underline text-color-accent">
                  <Link href={`/anime/${comment.mal_id}`}>
                    {comment.anime_title.length > 30? comment.anime_title.slice(0,30)+'...' : comment.anime_title}
                  </Link>
                </span>
              </h3>
              <Link
                className="cursor-pointer"
                href={`/anime/${comment.mal_id}`}
              >
                <CommentBox
                  comment={comment.comment}
                  user_image={comment.user_image}
                  username={comment.username}
                  created_at={comment.created_at}
                  rating={comment.rating}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
