import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const user = await authUserSession();

  return (
    <div class="container mx-auto">
      <div class="p-8 bg-color-primary shadow mt-24">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="flex text-center order-2 md:order-first mt-24 md:mt-0">
            <Link href={"/users/collection"} className="w-full">
              <button class="w-full text-color-dark py-2 px-4 uppercase rounded-lg bg-color-secondary border-color-dark border-4 hover:bg-color-accent hover:text-color-primary shadow-lg font-bold transition transform hover:-translate-y-0.5">
                My Collection
              </button>
            </Link>
          </div>
          <div class="relative order-first">
            <div class="w-48 h-48 bg-text-color-accent mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-color-secondary">
              <img src={user.image} alt={user.name} className="rounded-full" />
            </div>
          </div>

          <div class="space-x-8 flex justify-between mt-6 md:mt-0 md:justify-center order-last">
            <Link href={"/users/comments"}>
              <button class="text-color-primary py-2 px-4 uppercase rounded bg-color-dark hover:bg-color-accent shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                My Comments
              </button>
            </Link>
            <Link href={"/api/auth/signout"}>
              <button class="text-color-primary py-2 px-4 uppercase rounded bg-color-accent hover:bg-color-dark shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Sign Out
              </button>
            </Link>
          </div>
        </div>

        <div class="mt-20 text-center border-b pb-12">
          <h1 class="text-4xl font-medium text-color-dark">{user.name}</h1>
          <p class="font-light text-gray-600 mt-3">Bucharest, Romania</p>

          <p class="mt-8 text-gray-500">
            Solution Manager - Creative Tim Officer
          </p>
          <p class="mt-2 text-gray-500">University of Computer Science</p>
        </div>

        <div class="mt-12 flex flex-col justify-center">
          <p class="text-gray-600 text-center font-light lg:px-16">
            An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
          <button class="text-indigo-500 py-2 px-4  font-medium mt-4">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
