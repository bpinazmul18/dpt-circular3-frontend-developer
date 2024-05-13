import { TRIPS } from "@/config/trips";

export type ITripsType = (typeof TRIPS)[keyof typeof TRIPS];

export type TripsType = {
  id: number;
  name: ITripsType;
};
