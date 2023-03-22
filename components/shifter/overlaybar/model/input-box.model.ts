import { ColumnCell } from "../../body.shifter/table.body.shifter/model/table.model";

export interface InputBoxType {
  detail: {
    Id: string;
    value: string;
  };
  column: ColumnCell[];
  editMode: boolean;
}
