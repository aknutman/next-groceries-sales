import { BodyModel, ShifterModel } from "./model/shifter.model";
import Sidebar from "./sidebar";
import BodyShifter from "./body.shifter";
import React, { useState } from "react";
import Overlaybar from "./overlaybar";

interface Props {
  ShifterData: ShifterModel;
}
export default function Shifter({ ShifterData }: Props) {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState({} as any);

  function handleOpenChange(newStatus: boolean) {
    setOpen(newStatus);
  }

  function handleRowClick(row: any) {
    setDetail(row);

    setOpen(true);
  }

  return (
    <>
      <div className="flex h-full flex-row">
        <div className="basis-1/6">
          <Sidebar />
        </div>
        <div className="basis-5/6 bg-gray-200">
          <BodyShifter
            TopBar={ShifterData.TopBar}
            Body={ShifterData.Body}
            onRowClick={handleRowClick}
          />
        </div>
      </div>
      <Overlaybar
        onOpenChange={handleOpenChange}
        bodyData={detail}
        openStatus={open}
      />
    </>
  );
}
