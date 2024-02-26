import Image from "next/image";
import React from "react";
import RatingStar from "../Utilities/RatingStar";
import Link from "next/link";

const Card = ({ mal_id, anime_title, anime_image, anime_rating }) => {
  console.log("score :", anime_rating);
  return (
    <Link href={`/anime/${mal_id}`}>
      <div className="flex flex-col gap-4 hover:scale-105 ease-in-out duration-300">
        <div className="rounded relative overflow-hidden shadow-lg">
          <Image
            className="rounded transition-transform duration-500 w-full"
            src={anime_image}
            alt={anime_title}
            width={350}
            height={250}
          />
          <div className="background-linear-dark h-0 w-full text-color-primary rounded absolute left-0 bottom-0 flex items-center flex-col py-10 gap-1 transition-all duration-500 hover:h-full ease-in-out ">
            <h3 className="font-bold text-center">{anime_title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
