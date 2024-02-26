import InputSearch from "./InputSearch";
import Link from "next/link";
import MobileMode from "./mobileMode";
import UserAuthButton from "./UserAuthButton";
import { authUserSession } from "@/libs/auth-libs";

const Navbar = async() => {
  const user = await authUserSession()
  return (
    <header className="shadow-xl bg-color-secondary sticky top-0 z-50 w-full">
      <div className="md:flex flex-row justify-between py-4 px-2 gap-2 container mx-auto w-full items-center hidden">
        <Link
          href={"/"}
          className="font-bold text-slate-800 text-lg h-full my-auto"
        >
          MeinAnimeList
        </Link>
        <div className="flex gap-6 items-center">
          <InputSearch/>
          <UserAuthButton user={user}/>
        </div>
      </div>
      <MobileMode className="block md:hidden" user={user}/>
    </header>
  );
};

export default Navbar;
