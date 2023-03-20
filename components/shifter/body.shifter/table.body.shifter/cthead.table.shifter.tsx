import { Column } from "./model/table.model";

interface ColumnType {
  Column: Column[];
}
export default function CTHead({ Column }: ColumnType) {
  return (
    <thead>
      <tr className="border-b">
        {Column.filter((col) => !col.Hidden).map((col) => (
          <th key={col.ColumnDefinition} className="p-4 text-left">
            {col.ColumnName}
          </th>
        ))}
      </tr>
    </thead>
  );
}
