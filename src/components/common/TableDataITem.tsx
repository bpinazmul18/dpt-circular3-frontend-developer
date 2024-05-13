type TableDataItemType = {
  children: React.ReactNode;
};
export default function TableDataItem({ children }: TableDataItemType) {
  return <td className="px-6 py-1.5 text-center">{children}</td>;
}
