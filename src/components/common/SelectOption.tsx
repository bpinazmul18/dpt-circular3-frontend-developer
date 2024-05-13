type SelectOptionType = {
  option: string;
  selected?: boolean;
  disabled?: boolean;
};
export default function SelectOption({ option }: SelectOptionType) {
  return (
    <option className="px-3" key={option} value={option}>
      {option}
    </option>
  );
}
