import { TripsType } from "@/Models/Trips";

export const TRIPS = {
  ROUND_TRIP: "Round Trip",
  ONE_WAY: "One Way",
  MULTI_CITY: "Multi City",
} as const;

export const trips: TripsType[] = [
  { id: 1, name: TRIPS.ROUND_TRIP },
  { id: 2, name: TRIPS.ONE_WAY },
  { id: 3, name: TRIPS.MULTI_CITY },
];
