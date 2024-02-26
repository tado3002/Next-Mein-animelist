import { ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

const MobileSidebar = ({ openSideBar, clickHandle }) => {
  const menu = ["Beranda", "Paling Populer", "Rekomendasi", "Genre"];
  const link = ["/", "/populer", "/", "/"];
  return (
    <div
      className={`${
        openSideBar ? "" : "-translate-x-full"
      } absolute top-0 w-full min-h-screen overflow-y-auto transition-transform transform ease-in-out duration-300 bg-color-dark bg-opacity-40`}
    >
      <div className="p-4 w-52 bg-color-dark text-color-primary h-screen">
        <button className="p-1 rounded-full shadow-color-accent shadow-lg border mb-12">
          <ArrowLeft size={25} onClick={clickHandle} />
        </button>
        <ul className="mt-4">
          {menu.map((item, index) => {
            return (
              <li className="mb-4" key={index}>
                <Link
                  href={link[index]}
                  className="block hover:text-indigo-400"
                  onClick={clickHandle}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;
