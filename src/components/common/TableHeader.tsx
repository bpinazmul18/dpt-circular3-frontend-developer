type TableHeaderType = {
  children: React.ReactNode;
};
export default function TableHeader({ children }: TableHeaderType) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>{children}</tr>
    </thead>
  );
}
