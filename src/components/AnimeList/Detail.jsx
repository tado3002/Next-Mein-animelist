import React from "react";
import RatingStar from "../Utilities/RatingStar";
import GenreList from "../Utilities/GenreList";

const Detail = ({ anime }) => {
  return (
    <div className="flex flex-col gap-2 md:w-4/6 w-full">
      {/* judul */}
      <div className="flex gap-2 items-center">
        <h3 className="text-base font-bold">{anime?.data?.title}</h3>
        <span className="text-[12px] italic">
          [{anime?.data.aired.string.split(" ").slice(0, 3).join(" ")}]
        </span>
      </div>
      {/* detail */}
      <div className="grid grid-cols-4 gap-4 h-16">
        <div className="w-full h-full border bg-color-dark text-color-primary flex flex-col text-center p-2 rounded">
          <span className="text-[12px]">Rank </span>
          <h3 className="font-bold">#{anime?.data.rank}</h3>
        </div>
        <div className="w-full h-full border bg-color-dark text-color-primary flex flex-col text-center p-2 rounded">
          <span className="text-[12px]">Episodes </span>
          <h3 className="font-bold text-sm md:text-base">{anime?.data.episodes}</h3>
        </div>
        <div className="w-full h-full border bg-color-dark text-color-primary flex flex-col text-center p-2 rounded">
          <span className="text-[12px]">Durasi </span>
          <h3 className="font-bold text-[12px] md:text-base leading-[10px] lg:leading-none">
            {anime?.data.duration}
          </h3>
        </div>
        <div className="w-full h-full border bg-color-dark text-color-primary flex flex-col text-center p-2 rounded">
          <span className="text-[12px]">Type </span>
          <h3 className="font-bold text-sm">{anime?.data.type}</h3>
        </div>
      </div>
      {/* rating */}
      <RatingStar rate={anime.data.score} max_rate={10} />
      {/* genre */}
      <GenreList genres={anime.data.genres}/>
    </div>
  );
};
export default Detail;
