type InputType = {
  type: "text" | "number" | "date";
  value?: string;
  classes?: string;
  placeholder?: string;
};
export default function Input({ ...props }: InputType) {
  const { classes, ...rest } = props;
  return (
    <input
      className={`border border-black px-2 py-2 focus:outline-none focus:bg-gray-100 focus:text-primary placeholder-gray-600 font-normal leading-normal text-gray-600 ${classes}`}
      {...rest}
    />
  );
}
