const OptionType = {
  String: "string",
  Number: "number",
  Boolean: "boolean",
  RichText: "richtext",
  Options: "options",
} as const;

export interface Column {
  OrderIndex: number;
  ColumnDef?: string;
  Header?: string;
  Cell?: Function;
  Hidden?: boolean;
  Id?: boolean;
  Readonly?: boolean;
  ValueType?: (typeof OptionType)[keyof typeof OptionType];
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
