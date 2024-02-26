"use client";
import { MagnifyingGlass, List, X, SignIn } from "@phosphor-icons/react";
import InputSearch from "./InputSearch";
import { useState } from "react";
import Link from "next/link";
import UserAuthButton from "./UserAuthButton";
import MobileSidebar from "./MobileSidebar";

const MobileMode = ({ user }) => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false)
  const sideBarHandler =(event)=>{
    event.preventDefault()
    setOpenSideBar(!openSideBar)
  }
  return (
    <div className="w-full relative">
      <div className="flex flex-row justify-between py-4 px-2 gap-2 container mx-auto w-full md:hidden items-center">
        <div className="flex gap-2">
          <List size={30} onClick={sideBarHandler}/>
          <span className="font-bold text-slate-800 text-lg w-fit my-auto">
            <Link href={"/"}>MeinAnimeList</Link>
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <button
            className={`${
              openSearch
                ? "absolute end-2 bg-color-secondary transition-all duration-500 ease-in-out p-1 "
                : " transition-all duration-500 ease-in-out"
            }`}
          >
            {openSearch ? (
              <X size={25} onClick={() => setOpenSearch(false)} />
            ) : (
              <MagnifyingGlass size={25} onClick={() => setOpenSearch(true)} />
            )}
          </button>
          <UserAuthButton user={user} />
          <div
            className={`${
              openSearch ? "top-3" : "-top-10"
            } absolute start-3 w-80 pe-2 transition-all ease-in-out duration-300`}
          >
            <InputSearch />
          </div>
        </div>
      </div>
      <MobileSidebar openSideBar={openSideBar} clickHandle={sideBarHandler}/>
    </div>
  );
};
export default MobileMode;
