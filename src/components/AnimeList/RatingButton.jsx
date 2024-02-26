"use client";
import { Star } from "@phosphor-icons/react";
import React from "react";

const RatingButton = ({rating,setRating}) => {
  const stars = Array(5).fill(null);
  const handleClick = (num, event) => {
    event.preventDefault();
    setRating(num + 1);

  };
  return (
    <div className="flex items-center gap-3 mb-3 justify-end">
      <span className="text-sm font-medium">Beri rating </span>
      <div className="flex gap-1">
        {stars.map((score, index) => {
          return (
            <Star
              size={25}
              weight={index < rating ? "fill" : "thin"}
              key={index}
              onClick={(event) => handleClick(index, event)}
              fill={index < rating ? "#FFD700" : ""}
              className={`${index < rating ? "" : "opacity-60 fill-color-dark"} hover:cursor-pointer`}
              
            />
          );
        })}
      </div>
      <span>{`${rating}/${stars.length}`}</span>
    </div>
  );
};

export default RatingButton;
