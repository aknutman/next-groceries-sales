import { useState } from "react";
import { InputType } from "zlib";
import { InputBoxType } from "./model/input-box.model";

export default function Numberbox({ detail, column, editMode }: InputBoxType) {
  const headerName: string = String(
    column.filter((col) => col.ColumnDefinition === detail.Id)[0].ColumnName
  );

  const [inputValue, setInputValue] = useState(+detail.value);

  function checkNumber(val: React.ChangeEvent<HTMLInputElement>) {
    if (isNaN(val.target.valueAsNumber)) {
      setInputValue(0);
    } else {
      setInputValue(+val.target.valueAsNumber);
    }
  }

  return (
    <>
      <div className="col-span-6">
        <label
          htmlFor={detail.Id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {headerName}
        </label>
        <input
          value={inputValue}
          disabled={!editMode}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => checkNumber(e)}
          type="number"
          name={detail.Id}
          id={detail.Id}
          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
}
