import { InputBoxType } from "./model/input-box.model";

export default function RichTextbox({ detail, column }: InputBoxType) {
  const headerName: string = String(
    column.filter((col) => col.ColumnDefinition === detail.Id)[0].ColumnName
  );

  return (
    <>
      <div className="col-span-6">
        <label
          htmlFor={detail.Id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {headerName}
        </label>
        <textarea
          value={detail.value}
          readOnly
          rows={3}
          name={detail.Id}
          id={detail.Id}
          autoComplete={detail.Id}
          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
}
