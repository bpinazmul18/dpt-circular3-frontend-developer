"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { menus } from "@/config/Menus";

export default function SecondaryHeader() {
  const pathname = usePathname();

  const name = useMemo(() => {
    return menus.find((item) => item.href === pathname.substring(1))?.name;
  }, [pathname]);

  return (
    <div className="w-full border-b border-b-gray-300 bg-secondary">
      <div className="container px-4 mx-auto">
        <h3 className="font-semibold text-xl leading-8 text-[#1F2937]">
          {name}
        </h3>
      </div>
    </div>
  );
}
