type TableBodyType = {
  children: React.ReactNode;
};
export default function TableBody({ children }: TableBodyType) {
  return (
    <tbody className="[&>*:nth-child(even)]:bg-brightGray [&>*:nth-child(odd)]:bg-white">
      {children}
    </tbody>
  );
}
