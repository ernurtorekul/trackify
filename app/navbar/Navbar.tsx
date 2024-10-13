"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { HeartIcon, HomeIcon, SearchIcon } from "lucide-react";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 w-full bg-black py-6 text-white">
      <nav className="flex justify-evenly">
        <Link href="/">
          <div className={`${pathname === "/" ? "text-white" : "text-gray-400"}`}>
            <HomeIcon size={24} />
          </div>
        </Link>
        <Link href="/search">
          <div className={`${pathname === "/search" ? "text-white" : "text-gray-400"}`}>
            <SearchIcon size={24} />
          </div>
        </Link>
        <Link href="/favorites">
          <div className={`${pathname === "/favorites" ? "text-white" : "text-gray-400"}`}>
            <HeartIcon size={24} />
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
