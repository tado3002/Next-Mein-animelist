import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserAuthButton = ({user}) => {
  const actionURL = user ? "/users/dashboard" : "/api/auth/signin";

  return (
    <div className="block">
      <Link href={actionURL}>
        {user ? (
          <Image
            width={50}
            height={50}
            alt={`user ${user?.name}`}
            className="rounded-full h-8 w-8 md:h-12 md:w-12 object-cover"
            src={user?.image}
          />
        ) : (
          <Link href={actionURL}><button className="text-sm font-bold border bg-color-dark text-color-primary py-1 px-2 rounded-lg">Masuk</button></Link>
        )}
      </Link>
    </div>
  );
};

export default UserAuthButton;
