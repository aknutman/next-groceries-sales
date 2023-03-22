import HeaderShifter from "./body.shifter/header.shifter";
import { RowCell } from "./body.shifter/table.body.shifter/model/table.model";
import PaginationShifter from "./body.shifter/table.body.shifter/pagination.shifter";
import TableShifter from "./body.shifter/table.body.shifter/table.shifter";
import { BodyModel, TopBarModel } from "./model/shifter.model";

interface Props {
  TopBar: TopBarModel;
  Body: BodyModel;
  onRowClick: (row: RowCell[]) => void;
}
export default function BodyShifter({ TopBar, Body, onRowClick }: Props) {
  return (
    <>
      <HeaderShifter TopBar={TopBar} />
      <div className="m-5 shadow">
        <TableShifter
          ColumnModel={Body.Column}
          ContentUrl={Body.Row?.SourceUrl}
          onRowClick={onRowClick}
        />
        <PaginationShifter />
      </div>
    </>
  );
}
