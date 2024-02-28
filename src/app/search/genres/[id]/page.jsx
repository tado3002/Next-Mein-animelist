"use client"
import AnimeList from "@/components/AnimeList";
import GenreList from "@/components/Utilities/GenreList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { getAnimeResponse } from "@/libs/api-libs";
import React, { useState,useEffect } from "react";

const page = ({ params }) => {
  const { id } = params;
  const [page, setPage] = useState(1);
  const [searchAnime, setSearchAnime] = useState();
  // const [genreList,setGenreList] = useState()
  const fetchData = async () => {
    const anime = await getAnimeResponse('',`?genres=${id}&&limit=24&&page=${page}&&order_by=popularity`);
    // const genres = await getAnimeResponse('genres','').filter(e=>e.mal_id==id)
    setSearchAnime(anime);
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <div className="mx-2 md:mx-auto md:container">
      <HeaderMenu title={`Anime Genre ${searchAnime?.data[0].name}`} />
      <AnimeList anime={searchAnime} />
      <Pagination
        page={page}
        lastPage={searchAnime?.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  );
};
export default page;
