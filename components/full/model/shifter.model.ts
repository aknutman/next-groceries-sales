import { Column } from "../../partial/body.shifter/table.body.shifter/table.model";

export interface ShifterModel {
  ShifterData: {
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
  };
}
