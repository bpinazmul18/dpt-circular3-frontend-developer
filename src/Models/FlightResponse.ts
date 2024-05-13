export type FlightSegmentType = {
  carrierCode: string;
  aircraft: string;
  flightNumber: string;
  departure: {
    at: string;
    iataCode: string;
  };
  arrival: {
    at: string;
    iataCode: string;
  };
};

export type FlightOfferType = {
  price: number;
  fareBasis: string[][];
  class: string[][];
  itineraries: {
    segments: FlightSegmentType[];
    duration: string;
  }[];
};

export type FlightResponse = {
  success: boolean;
  status?: number;
  data?: {
    flightOffer: FlightOfferType[];
    message: string;
  };
  error?: string;
};
