import { ColumnCell } from "./model/table.model";

interface Props {
  Column: ColumnCell[];
  RowData: any[];
  onRowClick: (row: any) => void;
}
export default function CTBody({ RowData, Column, onRowClick }: Props) {
  function handleRowClick(Id: string) {
    const selectedRow = RowData.slice().filter((row) => row.Id === Id);

    if (selectedRow.length > 0) onRowClick(selectedRow[0]);
  }

  return (
    <tbody>
      {RowData.map((row) => (
        <tr
          key={row.Id}
          className="border-b hover:cursor-pointer hover:bg-indigo-50"
        >
          {Column.filter((col) => !col.Hidden).map((col) => (
            <td
              key={String(row.Id).concat(
                ".",
                String(col.ColumnDefinition),
                ".",
                row[String(col.ColumnDefinition)]
              )}
              onClick={() => handleRowClick(String(row.Id))}
              className="p-3"
            >
              {row[String(col.ColumnDefinition)]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
