import { Column } from "../../partial/body.shifter/table.body.shifter/table.model";

export interface ShifterModel {
  TopBar?: {
    Hide: boolean;
    Title: string;
  };
  Sidebar?: {
    Hide: boolean;
  };
  Body: {
    Column: Column[];
  };
}
