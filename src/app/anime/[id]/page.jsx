import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import { Heart, PlayCircle } from "@phosphor-icons/react/dist/ssr";
import YoutubePlayer from "@/components/Utilities/YoutubePlayer";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentForm from "@/components/AnimeList/CommentForm";
import CommentBox from "@/components/AnimeList/CommentBox";
import Synopsis from "@/components/AnimeList/Synopsis";
import Detail from "@/components/AnimeList/Detail";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse("", `/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, mal_id: id },
  });
  const anime_data = {
    mal_id: id,
    anime_title: anime?.data.title,
    anime_image: anime?.data.images.webp.large_image_url,
    username: user?.name,
    user_image: user?.image,
    score: anime.data.score,
  };
  const anime_comments = await prisma.comment.findMany({
    where: { mal_id: id },
  });

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="relative">
        <Image
          src={
            anime?.data.trailer?.images.large_image_url !== null
              ? anime?.data.trailer?.images.large_image_url
              : anime.data.images.webp.large_image_url
          }
          alt="anime"
          width={720}
          height={480}
          className="object-cover h-auto md:h-80"
        />
        <div className="absolute top-0 z-30 w-full h-full flex justify-center items-center">
          <PlayCircle size={70} fill="#FFFF" className="hover:shadow-color-primary hover:-translate-y-1 hover:shadow-inner rounded-full"/>
        </div>
      </div>

      {/* header start */}
      <div className="h-80 lg:h-64 relative">
        <div className="w-full lg:w-3/4 flex flex-col md:flex-row gap-4 justify-center lg:pt-8 lg:ms-4 items-center md:items-end px-4">
          {/* image and add to favorite start */}
          <div className="flex flex-row md:flex-col w-full md:w-fit gap-6 mx-2 items-end justify-between h-12 lg:h-full relative">
            <div className="w-5/12 md:w-fit md:absolute md:bottom-20">
              <Image
                src={anime?.data.images.webp.large_image_url}
                className="shadow-lg rounded-md h-40 md:h-64  w-full object-cover"
                width={460}
                height={651}
                alt="anime"
              />
            </div>
            <div className="flex w-7/12 md:w-full justify-between flex-row h-12 gap-4">
              <CollectionButton
                anime_data={anime_data}
                user_email={user?.email}
                added={collection?.id && user ? true : false}
              />
              <button className="border-color-dark border rounded p-2 shadow-color-secondary shadow-lg">
                <Heart size={25} fill="red" />
              </button>
            </div>
          </div>
          {/* judul dan detail */}
          <Detail anime={anime} />
        </div>
      </div>
      <Synopsis synopsis={anime?.data.synopsis} />

      {/* video player */}
      {/* <YoutubePlayer youtubeId={anime?.data.trailer.youtube_id} /> */}

      {/* Komentar start */}
      <div className="w-full md:mx-auto container rounded-2xl border border-color-secondary p-2 mt-20 bg-color-secondary lg:pe-80 mb-32 flex flex-col gap-16 ">
        <CommentForm anime_data={anime_data} user_email={user?.email} />
        <div className="flex flex-col gap-4 px-3">
          <span className="text-lg lg:text-xl font-bold pb-4">COMMENTS</span>
          {anime_comments.length != 0 ? (
            anime_comments.map((item) => {
              return (
                <CommentBox
                  key={item.id}
                  comment={item.comment}
                  username={item.username}
                  user_image={item.user_image}
                  created_at={item.created_at}
                  rating={item.rating}
                />
              );
            })
          ) : (
            <span className="text-lg lg:text-xl tracking-[4px] font-md text-center">
              Belum ada komentar
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Page;
