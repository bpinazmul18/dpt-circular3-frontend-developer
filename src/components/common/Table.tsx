type TableType = {
  children: React.ReactNode;
};
export default function Table({ children }: TableType) {
  return (
    <table className="w-full text-xs text-left text-gray-600 font-light">
      {children}
    </table>
  );
}
