import { ShifterModel } from "../full/model/shifter.model";
import HeaderShifter from "./body.shifter/header.shifter";
import PaginationShifter from "./body.shifter/table.body.shifter/pagination.shifter";
import { Column } from "./body.shifter/table.body.shifter/table.model";
import TableShifter from "./body.shifter/table.body.shifter/table.shifter";

export default function BodyShifter({
  ColumnModel,
}: {
  ColumnModel: Column[];
}) {
  return (
    <>
      <HeaderShifter />
      <div className="m-5 shadow">
        <TableShifter ColumnModel={ColumnModel} />
        <PaginationShifter />
      </div>
    </>
  );
}
