import React from "react";
import { menus } from "@/config/Menus";
import NavMenu from "./NavMenu";
import Image from "next/image";

export default function Header() {
  return (
    <div className="ezy__nav1 dark py-6 bg-[#1F2937] text-white relative">
      <nav>
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center flex-row-reverse">
            <div className="flex items-center gap-3">
              <Image
                className="w-6 h-6 rounded-full"
                src="/images/bell-svgrepo-com.svg"
                alt="Bell"
                width={24}
                height={24}
              />

              <Image
                className="w-10 h-10 rounded-full"
                src="/images/profile-picture-5.jpg"
                alt="Nazu"
                width={40}
                height={40}
              />
            </div>

            <NavMenu menus={menus} />
          </div>
        </div>
      </nav>
    </div>
  );
}
