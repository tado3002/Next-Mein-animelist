"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import React, { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api-libs";

const page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState();
  const fetchData = async () => {
    const anime = await getAnimeResponse('/top',`?page=${page}&&limit=24`);
    setTopAnime(anime);
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <div className="mx-2 md:mx-auto md:container">
      <HeaderMenu title={"Anime Terpopuler"} />
      <AnimeList anime={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime?.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};

export default page;
