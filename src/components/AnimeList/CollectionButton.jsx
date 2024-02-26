"use client";
import { PlusSquare, CheckSquare } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CollectionButton = ({ anime_data, user_email, added }) => {
  const { mal_id, anime_title, anime_image, score } = anime_data;
  const router = useRouter();
  const [isAdded, setIsAdded] = useState(added);
  const collectionHandler = async (event) => {
    event.preventDefault();
    if (user_email && !isAdded) {
      const data = { mal_id, user_email, anime_title, anime_image,score };
      const response = await fetch("/api/v1/collection", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const collection = await response.json();
      if (collection.success) setIsAdded(true);
      router.refresh();
    } else if (isAdded) {
      return;
    } else {
      alert("anda belum login");
    }
  };
  return (
    <button
      className={`py-2 px-2 justify-center font-bold text-[12px] shadow-lg w-full h-full bg-color-secondary rounded flex gap-1 items-center border-color-dark border-2`}
      onClick={collectionHandler}
    >
      <span>{isAdded ? "Added to list" : "Add to list"}</span>{" "}
      {isAdded ? <CheckSquare size={25} /> : <PlusSquare size={25} />}
    </button>
  );
};

export default CollectionButton;
