import Image from "next/image";
import React from "react";
import RatingButton from "./RatingButton";
import RatingStar from "../Utilities/RatingStar";

const CommentBox = ({ username, comment, user_image, created_at, rating }) => {
  const commentDate = new Date(created_at).toLocaleString();
  return (
    <div className="flex flex-col gap-2 justify-start relative top-1/3 mb-2 transition-all ease-in-out duration-500">
      <div className="relative grid grid-cols-1 gap-2 md:gap-4 px-4 py-2 border rounded-lg bg-color-primary shadow-lg">
        <div className="relative flex gap-4">
          <Image
            src={user_image}
            className="relative rounded-lg -top-8 -mb-4 bg-color-primary border h-16 w-16"
            width={300}
            height={300}
            alt={username}
            loading="lazy"
          />
          <div className="flex flex-col w-full">
            <div className="flex flex-row gap-2 justify-between">
              <p className="relative text-[10px] md:text-sm font-bold whitespace-nowrap truncate overflow-hidden">
                {username}
              </p>
              <a className="text-color-dark text-base" href="#">
                <i className="fa-solid fa-trash"></i>
              </a>
            </div>
            <p className="text-color-dark text-[8px] md:text-[10px]">
              {commentDate}
            </p>
          </div>
        </div>
        <p className="-mt-4 text-color-dark text-[12px] md:text-sm">
          {comment}
        </p>
      </div>
      <RatingStar rate={rating} max_rate={5}/>
    </div>
  );
};
export default CommentBox;
