import Link from "next/link";
import React from "react";
import { MenusType } from "@/Models/Menu";

type NavItemType = MenusType;

export default function NavItem({ id, name, href, isActive }: NavItemType) {
  return (
    <li key={id}>
      <Link
        className={`px-4 ${isActive ? "opacity-100" : "opacity-50 hover:opacity-100"}`}
        href={href}
      >
        {name}
      </Link>
    </li>
  );
}
