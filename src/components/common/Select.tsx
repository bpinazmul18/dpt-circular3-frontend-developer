import SelectOption from "@/components/common/SelectOption";

type SelectType = {
  children: React.ReactNode;
  defaultSelectedLabel: string;
};
export default function Select({ defaultSelectedLabel, children }: SelectType) {
  return (
    <label>
      {""}
      <select
        name="pets"
        id="pet-select"
        className="border border-black p-2.5 focus:outline-none bg-secondary focus:bg-gray-100 focus:text-primary font-normal leading-normal text-gray-600"
      >
        <SelectOption option={defaultSelectedLabel} disabled selected />
        {children}
      </select>
    </label>
  );
}
