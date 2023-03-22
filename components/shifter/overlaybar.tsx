import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { BodyModel } from "./model/shifter.model";
import {
  Column,
  InputValueType,
} from "./body.shifter/table.body.shifter/model/table.model";

interface Props {
  openStatus: boolean;
  onOpenChange: (newValue: boolean) => void;
  bodyData: any;
  column: Column[];
}
export default function Overlaybar({
  openStatus,
  onOpenChange,
  bodyData,
  column,
}: Props) {
  return (
    <Transition.Root show={openStatus} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onOpenChange}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-80 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => onOpenChange(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                        Details
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Your content */}
                      <OverlayContent detail={bodyData} column={column} />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

interface ContentProps {
  detail: any;
  column: Column[];
}
function OverlayContent({ detail, column }: ContentProps) {
  const detailArr = Object.entries(detail);
  console.log("detailArr: ", detailArr);
  console.log("column: ", column);

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <form action="#" method="POST">
          <div className="overflow-hidden">
            <div className="bg-white ">
              <div className="grid grid-cols-6 gap-6">
                {detailArr.map((item) => (
                  <RenderInput
                    key={item[0]}
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

interface TextboxType {
  detail: {
    Id: string;
    value: string;
  };
  column: Column[];
}
function RenderInput({ detail, column }: TextboxType) {
  const colType: InputValueType = column.filter(
    (col) => col.ColumnDefinition === detail.Id
  )[0].ValueType!;

  switch (colType) {
    case "richtext": {
      return <RichTextbox detail={detail} column={column} />;
    }
    default: {
      return <Textbox detail={detail} column={column} />;
    }
  }
}

function Textbox({ detail, column }: TextboxType) {
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
        <input
          value={detail.value}
          readOnly
          type="text"
          name={detail.Id}
          id={detail.Id}
          autoComplete={detail.Id}
          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
}

function RichTextbox({ detail, column }: TextboxType) {
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
