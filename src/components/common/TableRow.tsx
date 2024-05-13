type TableRowType = {
  children: React.ReactNode;
};
export default function TableRow({ children }: TableRowType) {
  return <tr className="bg-white border-b">{children}</tr>;
}
