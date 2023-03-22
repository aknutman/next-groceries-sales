import {
  CheckIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  ColumnCell,
  InputValueType,
  RowCell,
} from "../body.shifter/table.body.shifter/model/table.model";
import Checkbox from "./checkbox.overlaybar";
import { InputBoxType } from "./model/input-box.model";
import Numberbox from "./numberbox.overlaybar";
import RichTextbox from "./richtextbox.overlaybar";
import Textbox from "./textbox.overlaybar";

interface ContentProps {
  detail: RowCell[];
  column: ColumnCell[];
}
export default function OverlayContent({ detail, column }: ContentProps) {
  const [editMode, setEditMode] = useState(false);

  const sortedDisplayedDetail = detail
    .slice()
    .sort((n1: any, n2: RowCell) => n1.OrderIndex - n2.OrderIndex)
    .filter((item) => {
      const isHidden = column.filter(
        (col) => col.ColumnDefinition === item.ColumnDefinition
      )[0].Hidden;

      return !isHidden;
    });

  function handleFormSubmit(e: any) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    console.log("formData", formData);
  }

  return (
    <>
      <div className="flex flex-row mx-6 -mt-4 mb-6 text-gray-800 ">
        <PencilSquareIcon
          className={
            "flex-initial h-5 w-5 hover:cursor-pointer " +
            (editMode ? "hidden" : "")
          }
          onClick={() => setEditMode(true)}
        />

        <XMarkIcon
          className={
            "flex-initial h-5 w-5 hover:cursor-pointer " +
            (editMode ? "" : "hidden")
          }
          onClick={() => setEditMode(false)}
        />

        <div className="flex-1 text-base font-bold text-center">
          {editMode ? "Edit Mode" : ""}
        </div>
      </div>

      <form onSubmit={handleFormSubmit} method="POST">
        <div className="overflow-hidden">
          <div className={editMode ? "" : "bg-gray-200"}>
            <div className="grid grid-cols-6 gap-6 p-6">
              {sortedDisplayedDetail.map((detail) => (
                <RenderInput
                  key={detail.ColumnDefinition}
                  detail={{
                    Id: String(detail.ColumnDefinition),
                    value: String(detail.Value),
                  }}
                  column={column}
                  editMode={editMode}
                />
              ))}
            </div>
          </div>
          <div className={"px-6 py-3 text-right " + (editMode ? "" : "hidden")}>
            <button
              className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 mb-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

function RenderInput({ detail, column, editMode }: InputBoxType) {
  const colType: InputValueType = column.filter(
    (col) => col.ColumnDefinition === detail.Id
  )[0].ValueType!;

  switch (colType) {
    case "richtext": {
      return (
        <RichTextbox detail={detail} column={column} editMode={editMode} />
      );
    }
    case "number": {
      return <Numberbox detail={detail} column={column} editMode={editMode} />;
    }
    case "boolean": {
      return <Checkbox detail={detail} column={column} editMode={editMode} />;
    }
    default: {
      return <Textbox detail={detail} column={column} editMode={editMode} />;
    }
  }
}
