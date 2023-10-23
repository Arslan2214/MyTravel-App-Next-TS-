"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SideNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Image
        className="inline-block cursor-pointer lg:hidden"
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        onClick={() => setIsSidebarOpen(true)}
      />
      <div
        className={`${
          isSidebarOpen ? "fixed" : "hidden"
        } left-0 top-0 flex p-8 lg:hidden border border-green-50 flex-col h-full w-full bg-white`}
      >
        <span
          className="absolute px-8 py-4 right-0 top-0 text-3xl inline-block select-none cursor-pointer lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          X
        </span>
        <ul className="flex flex-col justify-center items-center h-full gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-2xl md:text-xl text-gray-800 cursor-pointer pb-1.5 transition-all hover:font-semibold "
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideNavbar;
