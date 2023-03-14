export default function TableShifter() {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="p-4 text-left">Song</th>
            <th className="p-4 text-left">Artist</th>
            <th className="p-4 text-left">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b hover:cursor-pointer hover:bg-indigo-50">
            <td className="p-3">
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr className="border-b hover:cursor-pointer hover:bg-indigo-50">
            <td className="p-3">Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr className="border-b hover:cursor-pointer hover:bg-indigo-50">
            <td className="p-3">Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
