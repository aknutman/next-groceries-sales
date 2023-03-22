import { InputBoxType } from "./model/input-box.model";

export default function Checkbox({ detail, column }: InputBoxType) {
  const headerName: string = String(
    column.filter((col) => col.ColumnDefinition === detail.Id)[0].ColumnName
  );
  const headerDesc: string = String(
    column.filter((col) => col.ColumnDefinition === detail.Id)[0]
      .ColumnDescription
  );

  return (
    <>
      <div className="col-span-6 pl-1 flex items-start">
        <div className="flex h-6 items-center">
          <input
            id={detail.Id}
            checked={String(detail.value).toLowerCase() === "true"}
            readOnly
            name={detail.Id}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
        <div className="ml-3 text-sm leading-6">
          <label
            htmlFor={detail.Id}
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {headerName}
          </label>
          <p className="text-gray-500">
            {headerDesc !== "undefined" ? headerDesc : ""}
          </p>
        </div>
      </div>
    </>
  );
}
