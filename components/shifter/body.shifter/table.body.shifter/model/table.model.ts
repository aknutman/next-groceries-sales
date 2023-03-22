const InputType = {
  String: "string",
  Number: "number",
  Boolean: "boolean",
  RichText: "richtext",
  Options: "options",
} as const;

export type InputValueType = typeof InputType[keyof typeof InputType];

export interface Column {
  OrderIndex: number;
  ColumnDefinition?: string;
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

export interface PaginatorModel {
  RowCount: number;
  RowPerPage: number;
  CurrentPageIndex: number;
}
