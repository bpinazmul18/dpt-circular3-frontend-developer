import Select from "@/components/common/Select";
import SelectOption from "@/components/common/SelectOption";

type DaySelectType = {
  label: string;
  options: number[];
};

export default function DaySelect({ options, label }: DaySelectType) {
  const _options = [label, ...options];

  return (
    <Select value={options[0]?.toString()}>
      {_options.map((option) => (
        <SelectOption key={option} option={option.toString()} />
      ))}
    </Select>
  );
}
