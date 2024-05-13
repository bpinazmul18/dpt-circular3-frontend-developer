type SelectOptionType = {
  option: string;
  selected?: boolean;
  disabled?: boolean;
};
export default function SelectOption({
  option,
  selected,
  disabled,
}: SelectOptionType) {
  return (
    <option
      className="px-3"
      key={option}
      value={option}
      selected={selected}
      disabled={disabled}
    >
      {option}
    </option>
  );
}
