import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Page({params}) {
  const { keyword } = params;
  const anime = await getAnimeResponse('',`?q=${keyword}`)

  return (
    <>
      {/* section searchlist */}
      <section className="container mx-auto my-4 flex flex-col gap-2 px-2">
        <Header
          title={`Pencarian ${keyword.split('%20').join(' ')}`}
        />                                                                                                                                                      
        <AnimeList anime={anime} />
      </section>
    </>
  );
}
