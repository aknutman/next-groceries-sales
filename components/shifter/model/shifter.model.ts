import { ColumnCell, RowCell } from "../body.shifter/table.body.shifter/model/table.model";

export interface TopBarModel {
  Hide: boolean;
  Title: string;
}

export interface BodyModel {
  Column: ColumnCell[];
  Row?: {
    SourceUrl?: string;
    Rows?: RowCell[][];
  };
}

export interface SidebarModel {
  Hide: boolean;
}

export interface ShifterModel {
  TopBar: TopBarModel;
  Sidebar?: SidebarModel;
  Body: BodyModel;
}
