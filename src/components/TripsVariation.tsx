import { trips } from "@/config/trips";

export default function TripsVariation() {
  return (
    <div className="container px-4 mx-auto py-6">
      <div className="flex justify-center">
        <div className="border border-blue">
          {trips.map((trip) => (
            <button
              key={trip.id}
              className="bg-transparent hover:bg-blue inline-flex items-center justify-center py-1 px-3 text-center text-sm font-normal text-primary transition-all hover:text-white sm:px-6"
            >
              {trip.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
