import { ColumnCell, RowCell } from "./model/table.model";
import CTHead from "./cthead.table.shifter";
import CTBody from "./ctbody.table.shifter";

import axios from "axios";
import useSWR from "swr";

interface Props {
  ColumnModel: ColumnCell[];
  ContentUrl?: string;
  onRowClick: (row: RowCell[]) => void;
}
export default function TableShifter({
  ColumnModel,
  ContentUrl,
  onRowClick,
}: Props) {
  const orderedColumn = ColumnModel.slice().sort(
    (n1: ColumnCell, n2: ColumnCell) => n1.OrderIndex - n2.OrderIndex
  );

  const { data, error, isLoading } = useSWR(
    `/api/firebase/firestore/entries?collection=`.concat(String(ContentUrl)),
    fetcher
  );

  if (!error && !isLoading) {
    const dataArr: any[] = data;

    const rows: RowCell[][] = dataArr.map((item) => {
      const itemArr = Object.entries(item);

      const row = itemArr.map((itm) => {
        const rowCell: RowCell = {
          OrderIndex: ColumnModel.filter(
            (col) => col.ColumnDefinition === itm[0]
          )[0].OrderIndex,
          ColumnDefinition: itm[0],
          Value: itm[1],
        };

        return rowCell;
      });
      return row;
    });

    return (
      <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
        <table className="w-full">
          <CTHead Column={orderedColumn} />
          <CTBody
            Column={orderedColumn}
            RowData={rows}
            onRowClick={onRowClick}
          />
        </table>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
        <table className="w-full">
          <CTHead Column={orderedColumn} />
        </table>
      </div>
    );
  }
}

const fetcher = (url: string) =>
  axios.get(url).then(async (res) => res.data.entriesData);
