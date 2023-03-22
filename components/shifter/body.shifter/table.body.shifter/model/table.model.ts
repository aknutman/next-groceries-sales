const InputType = {
  String: "string",
  Number: "number",
  Boolean: "boolean",
  RichText: "richtext",
  Options: "options",
} as const;

export type InputValueType = typeof InputType[keyof typeof InputType];

interface CellDefinition {
  OrderIndex: number;
  ColumnDefinition?: string;
}
export interface ColumnCell extends CellDefinition {
  ColumnName?: string;
  ColumnDescription?: string;
  Hidden?: boolean;
  Id?: boolean;
  Readonly?: boolean;
  ValueType?: InputValueType;
  Options?: {
    List: {
      name: string;
      value: string | number | boolean;
    }[];
    RemoteUrl?: {
      [key: string]: string;
    };
  };
  Required?: boolean;
}

export interface RowCell extends CellDefinition {
  Value: string;
}

export interface PaginatorModel {
  RowCount: number;
  RowPerPage: number;
  CurrentPageIndex: number;
}
