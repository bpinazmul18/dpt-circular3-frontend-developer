type TableHeaderItemType = {
  children: React.ReactNode;
};
export default function TableHeaderItem({ children }: TableHeaderItemType) {
  return (
    <th scope="col" className="px-6 py-3 text-center">
      {children}
    </th>
  );
}
