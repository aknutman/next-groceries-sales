/**
 * Every optional property, the default value will be considered as FALSY
 * Set the property name wise!
 */
const OptionType = {
  String: "string",
  Number: "number",
  Boolean: "boolean",
  RichText: "richtext",
  Options: "options",
} as const;

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
      Column: {
        ColumnDefinition: string;
        ColumnName: string;
        ColumnDescription?: string;
        IsId?: boolean;
        Required?: boolean;
        Unique?: boolean;
        ReadOnly?: boolean;
        ValueType?: typeof OptionType[keyof typeof OptionType];
        Options?: {
          List: {
            name: string;
            value: string | number | boolean;
          }[];
        };
      };
    };
  };
}
