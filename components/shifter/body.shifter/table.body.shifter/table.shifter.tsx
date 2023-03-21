import { Column } from "./model/table.model";
import CTHead from "./cthead.table.shifter";
import CTBody from "./ctbody.table.shifter";

import axios from "axios";
import useSWR from "swr";

interface Props {
  ColumnModel: Column[];
  ContentUrl?: string;
  onRowClick: (row: any) => void;
}
export default function TableShifter({
  ColumnModel,
  ContentUrl,
  onRowClick,
}: Props) {
  const orderedColumn = ColumnModel.slice().sort(
    (n1: Column, n2: Column) => n1.OrderIndex - n2.OrderIndex
  );

  const { data, error, isLoading } = useSWR(
    `/api/firebase/firestore/entries?collection=`.concat(String(ContentUrl)),
    fetcher
  );

  if (!error && !isLoading) {
    return (
      <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
        <table className="w-full">
          <CTHead Column={orderedColumn} />
          <CTBody
            Column={orderedColumn}
            RowData={data}
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
