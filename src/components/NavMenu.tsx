"use client";
import { MenusType } from "@/Models/Menu";
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "@/components/NavItem";

type NavMenuType = {
  menus: MenusType[];
};
export default function NavMenu({ menus }: NavMenuType) {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  return (
    <>
      <button
        className="block lg:hidden cursor-pointer h-10 z-20"
        type="button"
        onClick={() => setOpenMobileMenu((prevState) => !prevState)}
      >
        <div className="h-0.5 w-7 bg-white -translate-y-2" />
        <div className="h-0.5 w-7 bg-white" />
        <div className="h-0.5 w-7 bg-white translate-y-2" />
      </button>
      <ul
        className={`w-full flex flex-col lg:flex-row justify-center items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen lg:left-0 lg:relative lg:h-auto lg:w-auto bg-[#1F2937] lg:bg-transparent ${openMobileMenu ? "top-20 left-0" : "top-0 left-full"}`}
      >
        {menus.map((menu) => (
          <NavItem
            key={menu.id}
            id={menu.id}
            name={menu.name}
            href={menu.href}
            isActive={menu.isActive}
          />
        ))}
      </ul>
    </>
  );
}
