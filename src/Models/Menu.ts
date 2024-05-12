import { MENUS, ROUTES } from "@/config/Menus";

export type IMenuType = (typeof MENUS)[keyof typeof MENUS];
export type IMenuHrefType = (typeof ROUTES)[keyof typeof ROUTES];

export type MenusType = {
    id: number;
    name: IMenuType;
    href: IMenuHrefType;
    isActive: boolean;
}