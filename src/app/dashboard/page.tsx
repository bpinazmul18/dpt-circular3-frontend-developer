import TripsVariation from "@/components/TripsVariation";
import Input from "@/components/common/Input";
import DateInput from "@/components/common/DateInput";
import DaySelect from "@/components/common/DaySelect";
import TripsFiltering from "@/components/TripsFiltering";

export default function Dashboard() {
  return (
    <>
      <TripsVariation />

      <TripsFiltering />
    </>
  );
}
