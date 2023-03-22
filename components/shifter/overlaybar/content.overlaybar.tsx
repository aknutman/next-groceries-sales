import {
  Column,
  InputValueType,
} from "../body.shifter/table.body.shifter/model/table.model";
import Checkbox from "./checkbox.overlaybar";
import { InputBoxType } from "./model/input-box.model";
import Numberbox from "./numberbox.overlaybar";
import RichTextbox from "./richtextbox.overlaybar";
import Textbox from "./textbox.overlaybar";

interface ContentProps {
  detail: any;
  column: Column[];
}
export default function OverlayContent({ detail, column }: ContentProps) {
  const detailArr = Object.entries(detail);
  console.log("detailArr: ", detailArr);
  console.log("column: ", column);

  /**
   * 0. Id
   * 1. Value
   * 2. Order
   * 3. Hidden
   */
  const newDetailArr = detailArr
    .map((detail) => {
      const index = column.filter(
        (col) => col.ColumnDefinition === detail[0]
      )[0].OrderIndex;

      const hidden = column.filter(
        (col) => col.ColumnDefinition === detail[0]
      )[0].Hidden;

      return [
        detail[0],
        detail[1],
        index,
        String(hidden).toLowerCase() === "true",
      ];
    })
    .sort((n1: any, n2: any) => n1[2] - n2[2]);

  console.log("newDetailArr: ", newDetailArr);

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <form action="#" method="POST">
          <div className="overflow-hidden">
            <div className="bg-white ">
              <div className="grid grid-cols-6 gap-6">
                {newDetailArr
                  .filter((item) => !item[3])
                  .map((item) => (
                    <RenderInput
                      key={String(item[0])}
                      detail={{ Id: String(item[0]), value: String(item[1]) }}
                      column={column}
                    />
                  ))}
              </div>
            </div>
            <div className="bg-gray-50 py-3 text-right">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

function RenderInput({ detail, column }: InputBoxType) {
  const colType: InputValueType = column.filter(
    (col) => col.ColumnDefinition === detail.Id
  )[0].ValueType!;

  switch (colType) {
    case "richtext": {
      return <RichTextbox detail={detail} column={column} />;
    }
    case "number": {
      return <Numberbox detail={detail} column={column} />;
    }
    case "boolean": {
      return <Checkbox detail={detail} column={column} />;
    }
    default: {
      return <Textbox detail={detail} column={column} />;
    }
  }
}
