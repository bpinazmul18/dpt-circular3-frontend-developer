import SelectOption from "@/components/common/SelectOption";

type SelectType = {
  children: React.ReactNode;
  value: string;
};
export default function Select({ children, value }: SelectType) {
  return (
    <label>
      <select
        name="pets"
        className="border border-black p-2.5 focus:outline-none bg-secondary focus:bg-gray-100 focus:text-primary font-normal leading-normal text-gray-600"
      >
        {children}
      </select>
    </label>
  );
}
