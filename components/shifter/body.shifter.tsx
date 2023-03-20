import HeaderShifter from "./body.shifter/header.shifter";
import PaginationShifter from "./body.shifter/table.body.shifter/pagination.shifter";
import TableShifter from "./body.shifter/table.body.shifter/table.shifter";
import { BodyModel, TopBarModel } from "./model/shifter.model";

interface Props {
  TopBar: TopBarModel;
  Body: BodyModel;
}
export default function BodyShifter({ TopBar, Body }: Props) {
  return (
    <>
      <HeaderShifter TopBar={TopBar} />
      <div className="m-5 shadow">
        <TableShifter
          ColumnModel={Body.Column}
          ContentUrl={Body.Row?.SourceUrl}
        />
        <PaginationShifter />
      </div>
    </>
  );
}
