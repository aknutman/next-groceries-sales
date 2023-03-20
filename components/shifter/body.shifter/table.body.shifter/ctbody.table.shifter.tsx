import { Column } from "./model/table.model";

interface Props {
  Column: Column[];
  RowData: any[];
  onRowClick: (Id: string) => void;
}
export default function CTBody({ RowData, Column, onRowClick }: Props) {
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
              onClick={() => onRowClick(String(row.Id))}
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
