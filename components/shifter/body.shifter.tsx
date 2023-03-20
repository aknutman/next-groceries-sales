import HeaderShifter from "./body.shifter/header.shifter";
import PaginationShifter from "./body.shifter/table.body.shifter/pagination.shifter";
import { Column } from "./body.shifter/table.body.shifter/model/table.model";
import TableShifter from "./body.shifter/table.body.shifter/table.shifter";

interface Props {
  ColumnModel: Column[];
  ContentUrl?: string;
}
export default function BodyShifter({ ColumnModel, ContentUrl }: Props) {
  return (
    <>
      <HeaderShifter />
      <div className="m-5 shadow">
        <TableShifter ColumnModel={ColumnModel} ContentUrl={ContentUrl} />
        <PaginationShifter />
      </div>
    </>
  );
}
