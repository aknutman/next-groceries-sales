import { Column } from "../body.shifter/table.body.shifter/model/table.model";

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
    Row?: {
      SourceUrl: string;
    };
  };
}
