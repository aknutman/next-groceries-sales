import { ShifterModel } from "./model/shifter.model";
import Sidebar from "./sidebar";
import BodyShifter from "./body.shifter";
import React from "react";

interface Props {
  ShifterData: ShifterModel;
}
export default function Shifter({ ShifterData }: Props) {
  return (
    <div className="flex h-full flex-row">
      <div className="basis-1/6">
        <Sidebar />
      </div>
      <div className="basis-5/6 bg-gray-200">
        <BodyShifter
          ColumnModel={ShifterData.Body.Column}
          ContentUrl={String(ShifterData.Body.Row?.SourceUrl)}
        />
      </div>
    </div>
  );
}
