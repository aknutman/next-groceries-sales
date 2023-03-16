import { ShifterModel } from "./model/shifter.model";
import Sidebar from "../partial/sidebar";
import BodyShifter from "../partial/body.shifter";
import React from "react";
import { Column } from "../partial/body.shifter/table.body.shifter/table.model";

export default function Shifter(ShifterData: ShifterModel) {
  return (
    <div className="flex h-full flex-row">
      <div className="basis-1/6">
        <Sidebar />
      </div>
      <div className="basis-5/6 bg-gray-200">
        <BodyShifter ColumnModel={ShifterData.ShifterData.Body.Column} />
      </div>
    </div>
  );
}
