import Select from "@/components/common/Select";
import SelectOption from "@/components/common/SelectOption";

type DaySelectType = {
  label: string;
  options: number[];
};

export default function DaySelect({ options, label }: DaySelectType) {
  return (
    <Select defaultSelectedLabel={label}>
      {options.map((option) => (
        <SelectOption key={option} option={option.toString()} />
      ))}
    </Select>
  );
}
