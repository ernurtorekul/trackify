"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { HeartIcon, HomeIcon, SearchIcon } from "lucide-react";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 w-full py-2 text-white">
      <nav className="flex justify-evenly">
        <Link href="/">
          <div
            className={`${pathname === "/" ? "bg-gray-400 w-36" : "text-gray-400"} ${pathname !== "/" ? "w-28" : ""} flex justify-center items-center h-12  bg-gray-300 rounded-full`}
          >
            <HomeIcon size={24} />
          </div>
        </Link>
        <Link href="/search">
          <div
            className={`${pathname === "/search" ? "bg-gray-400 w-36" : "text-gray-400"} ${pathname !== "/search" ? "w-24" : ""} flex justify-center items-center h-12  bg-gray-300 rounded-full`}
          >
            <SearchIcon size={24} />
          </div>
        </Link>
        <Link href="/favorites">
          <div
            className={`${pathname === "/favorites" ? "bg-gray-400 w-36" : "text-gray-400"} ${pathname !== "/favorites" ? "w-24" : ""} flex justify-center items-center h-12  bg-gray-300 rounded-full`}
          >
            <HeartIcon size={24} />
          </div>
        </Link>
        <Link href={'/details'}></Link>
      </nav>
    </div>
  );
}

export default Navbar;
