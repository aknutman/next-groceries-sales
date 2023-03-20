import { Column } from "../body.shifter/table.body.shifter/model/table.model";

export interface TopBarModel {
  Hide: boolean;
  Title: string;
}

export interface BodyModel {
  Column: Column[];
  Row?: {
    SourceUrl: string;
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
