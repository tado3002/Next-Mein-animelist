"use client";
import { Star } from "@phosphor-icons/react";
import React from "react";

const RatingStar = ({ rate, max_rate }) => {
  
  const score = max_rate != 5 ? Math.floor(rate/2) : rate;
  return (
    <div className="flex items-center justify-between">
      <h3 className="font-medium text-[12px] italic">{`Rating: ${rate} / ${max_rate}`}</h3>
      <div className="flex flex-wrap gap-1 justify-end">
        {[
          <Star size={25} />,
          <Star size={25} />,
          <Star size={25} />,
          <Star size={25} />,
          <Star size={25} />,
        ].map((star, index) => {
          if (index < score) {
            return <Star size={25} color="#FFD700" weight="fill" key={index} />;
          } else {
            return (
              <Star size={25} className="text-color-secondary" key={index} />
            );
          }
        })}
        {}
      </div>
    </div>
  );
};

export default RatingStar;
