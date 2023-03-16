import { Column } from "../../partial/body.shifter/table.body.shifter/table.model";

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
      Column: Column[];
    };
  };
}
