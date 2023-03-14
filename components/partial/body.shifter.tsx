import HeaderShifter from "./body.shifter/header.shifter";
import PaginationShifter from "./body.shifter/pagination.shifter";
import TableShifter from "./body.shifter/table.shifter";

export default function BodyShifter() {
  return (
    <>
      <HeaderShifter />
      <div className="m-5 shadow">
        <TableShifter />
        <PaginationShifter />
      </div>
    </>
  );
}
