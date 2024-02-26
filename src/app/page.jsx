import AnimeList from "@/components/AnimeList";
import { getAnimeResponse, getNestedAnime, getRandomizeNumber } from "../libs/api-libs";
import Header from "@/components/AnimeList/Header";

export default async function Page() {
  const topAnime = await getAnimeResponse("/top", "?limit=12");
  let recomendedAnime = await getNestedAnime("/recommendations","entry");
  recomendedAnime = getRandomizeNumber(recomendedAnime, 12);

  return (
    <>
      {/* section terpopuler */}
      <section className="container mx-auto my-4 flex flex-col gap-2 px-2">
        <Header
          title={"Anime Terpopuler"}
          linkHref={"/populer"}
          linkTitle={"lihat semua"}
        />
        <AnimeList anime={topAnime} />
      </section>
      {/* section terbaru */}
      <section className="container mx-auto my-4 flex flex-col gap-2 px-2">
        <Header title={"Rekomendasi Anime"} linkHref={"/"} linkTitle={""} />
        <AnimeList anime={recomendedAnime} />
      </section>
    </>
  );
}
