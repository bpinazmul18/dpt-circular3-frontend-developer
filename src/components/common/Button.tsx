type ButtonType = {
  classes?: string;
  children?: React.ReactNode;
};
export default function Button({ children, classes }: ButtonType) {
  return (
    <button
      className={`rounded py-1.5 px-3.5 bg-blue text-white border border-blue hover:bg-secondary hover:text-blue uppercase ${classes}`}
    >
      {children}
    </button>
  );
}
