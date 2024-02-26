"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const searchHandle = (e) => {
    const keyword = searchRef.current.value;
    keyword !== "" && keyword.trim() !== "" ? router.push(`/search/${keyword}`) : "";
    e.preventDefault();
  };
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      searchHandle(e);
    }
  };

  return (
    <div className={`relative rounded-lg items-center`}>
      <input
        type="search"
        placeholder="Cari anime "
        ref={searchRef}
        className={`p-2 text-sm md:text-base w-full`}
        onKeyDown={enterHandler}
      />
      <button className="absolute end-1 p-1" onClick={searchHandle}>
        <MagnifyingGlass size={25} />
      </button>
    </div>
  );
};
export default InputSearch;
