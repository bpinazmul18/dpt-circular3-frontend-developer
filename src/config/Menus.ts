import { MenusType } from "@/Models/Menu";

export const MENUS = {
    DASHBOARD: 'Dashboard',
    MASTER_PRICE: 'Master Price',
    CUSTOM_PRICE: 'Custom Price',
    CALENDAR: 'Calendar',
    REPORTS: 'Reports',
} as const;

export const ROUTES = {
    DASHBOARD: 'dashboard',
    MASTER_PRICE: 'master_price',
    CUSTOM_PRICE: 'custom_price',
    CALENDAR: 'calendar',
    REPORTS: 'reports',
} as const;

export const menus: MenusType[] = [
    { id: 1, name: MENUS.DASHBOARD, href: ROUTES.DASHBOARD, isActive: true },
    { id: 2, name: MENUS.MASTER_PRICE, href: ROUTES.MASTER_PRICE, isActive: false },
    { id: 3, name: MENUS.CUSTOM_PRICE, href: ROUTES.CUSTOM_PRICE, isActive: false },
    { id: 4, name: MENUS.CALENDAR, href: ROUTES.CALENDAR, isActive: false },
    { id: 5, name: MENUS.REPORTS, href: ROUTES.REPORTS, isActive: false },
];