import GenreList from "@/components/Utilities/GenreList";
import { getAnimeResponse } from "@/libs/api-libs";
import React from "react";

const page = async () => {
  const animeGenres = await getAnimeResponse("/genres", "");
  return (
    <div className="container py-12 md:mx-auto px-4 ">
      <GenreList genres={animeGenres.data} />
    </div>
  );
};

export default page;
