import Header from "@/components/AnimeList/Header";
import Card from "@/components/Collection/Card";
import PrevPage from "@/components/Utilities/PrevPage";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import React from "react";
const page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user?.email },
  });
  return (
    <div className="container flex flex-col gap-6 mx-auto py-12 px-2">
      <div className="flex justify-between">
        <PrevPage />
        <Header linkHref={""} title={"My Collection"} linkTitle={""} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full justify-center mx-auto">
        {collection?.map((collect, index) => {
          return (
            <Card
              mal_id={collect.mal_id}
              anime_title={collect.anime_title}
              anime_image={collect.anime_image}
              key={index}
              anime_rating={collect.score}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
