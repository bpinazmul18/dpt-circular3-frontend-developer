"use server";

import http from "@/services/http";

export const getFlights = async () => {
  try {
    const response = await http.get(`/flight-offers`);

    if (response.status === 200) {
      return {
        success: true,
        status: response?.status,
        data: response?.data,
      };
    }

    if (response.statusText !== "OK") {
      return { success: false, error: response?.data };
    }
  } catch {
    return { success: false, error: "Something went wrong" };
  }
};
