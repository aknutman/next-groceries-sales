import { ColumnCell, RowCell } from "./model/table.model";

interface Props {
  Column: ColumnCell[];
  RowData: RowCell[][];
  onRowClick: (row: RowCell[]) => void;
}
export default function CTBody({ RowData, Column, onRowClick }: Props) {
  return (
    <tbody>
      {RowData.map((row) => (
        <tr
          key={row[0].Value}
          className="border-b hover:cursor-pointer hover:bg-indigo-50"
        >
          {Column.filter((col) => !col.Hidden).map((col) => (
            <td
              key={String(col.ColumnDefinition).concat(
                ".",
                String(row[0].Value)
              )}
              onClick={() => onRowClick(row)}
              className="p-3"
            >
              <StringBolean
                val={String(
                  row.filter(
                    (r) => r.ColumnDefinition === col.ColumnDefinition
                  )[0].Value
                )}
              />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

interface StringBoleanType {
  val: string;
}
function StringBolean({ val }: StringBoleanType) {
  switch (val.toLowerCase()) {
    case "true": {
      return (
        <div className="w-full text-center">
          <input
            checked={true}
            readOnly
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
      );
    }

    case "false": {
      return (
        <div className="w-full text-center">
          <input
            checked={false}
            readOnly
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
      );
    }

    default: {
      return <>{val}</>;
    }
  }
}
