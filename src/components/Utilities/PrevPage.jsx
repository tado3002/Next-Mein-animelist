"use client";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import React from "react";

const PrevPage = () => {
     const router = useRouter()
    const clickHandler =(e)=>{
        router.back()
        e.preventDefault()
    }
  return (
    <div>
      <button className="p-1 rounded-full border-2 border-color-dark bg-color-secondary shadow-lg" onClick={clickHandler}>
        <ArrowLeft size={25} />
      </button>
    </div>
  );
};

export default PrevPage;
