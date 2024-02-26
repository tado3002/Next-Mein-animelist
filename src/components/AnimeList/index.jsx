import Image from "next/image";
import Link from "next/link";

const imageUrl = "https://placehold.co/600x400/png";

const AnimeList = ({ anime }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
      {anime?.data?.map((item) => {
          return (
            <div
              key={item.mal_id}
              className="hover:scale-105 hover:text-color-accent transition-all ease-linear duration-300 "
            >
              <Link href={`/anime/${item.mal_id}`} className="cursor-pointer text-center">
                <Image
                  src={item.images.jpg.image_url}
                  alt={item.title}
                  width={400}
                  height={600}
                  className="shadow-lg rounded-md w-full h-40 md:h-56 object-cover"
                />
                <h3 className="font-bold md:text-lg text-[10px] sm:text-[12px] pt-2">{item.title}</h3>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default AnimeList;
