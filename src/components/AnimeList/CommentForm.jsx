"use client";
import prisma from "@/libs/prisma";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import RatingButton from "./RatingButton";

const CommentForm = ({ anime_data, user_email }) => {
  const [comment, setComments] = useState("");
  const [rating, setRating] = useState(0);
  const changeHandle = (event) => {
    event.preventDefault();
    setComments(event.target.value);
  };
  const router = useRouter();
  const submitHandle = async (event) => {
    if (user_email) {
      const { mal_id, username, anime_title, user_image } = anime_data;
      const data = {
        mal_id,
        user_email,
        username,
        comment,
        anime_title,
        user_image,
        rating
      };
      console.log(data);
      event.preventDefault();
      const response = await fetch(`/api/v1/comment`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      const commentUpdate = await response.json();
      console.log(commentUpdate);
      if (commentUpdate.isCreated) {
        setComments("");
        router.refresh();
      } else {
        alert("gagal menambahkan komen, silahkan coba lagi");
      }
    } else {
      router.push("/api/auth/signin");
    }
  };
  return (
    <div className="flex flex-col gap-2 p-3">
      {user_email ? (
        <div className="px-3 mb-2 mt-2">
          <textarea
            placeholder="comment"
            className="w-full rounded mb-2 shadow-lg leading-normal resize-none h-20 py-2 px-3 font-medium placeholder-color-secondary focus:outline-none"
            onChange={changeHandle}
            value={comment}
          ></textarea>
          <RatingButton rating={rating} setRating={setRating} />
        </div>
      ) : (
        <span className="text-lg lg:text-xl md:text-lg font-bold ">
          LOGIN UNTUK MENAMBAHKAN KOMENTAR
        </span>
      )}
      <div className="flex justify-end px-4">
        <input
          type="submit"
          className="px-4 py-1.5 shadow-lg rounded-md hover:cursor-pointer text-color-primary font-bold text-sm bg-color-accent"
          value={user_email ? "Comment" : "Login"}
          onClick={submitHandle}
        />
      </div>
    </div>
  );
};
export default CommentForm;
