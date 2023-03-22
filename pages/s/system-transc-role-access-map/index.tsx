import Shifter from "../../../components/shifter/shifter";
import { ShifterModel } from "../../../components/shifter/model/shifter.model";

const data: ShifterModel = {
  TopBar: {
    Hide: false,
    Title: "Role Access Map",
  },
  Body: {
    Column: [
      {
        ColumnDefinition: "Id",
        ColumnName: "Id",
        Id: true,
        Readonly: true,
        OrderIndex: 1,
      },
      {
        ColumnDefinition: "AccessObjectReference",
        ColumnName: "Access Object Reference",
        OrderIndex: 2,
      },
      {
        ColumnDefinition: "UserRoleReference",
        ColumnName: "User Role Reference",
        OrderIndex: 3,
      },
      {
        ColumnDefinition: "Create",
        ColumnName: "Create",
        OrderIndex: 4,
        ValueType: "boolean",
      },
      {
        ColumnDefinition: "Read",
        ColumnName: "Read",
        OrderIndex: 5,
        ValueType: "boolean",
      },
      {
        ColumnDefinition: "Update",
        ColumnName: "Update",
        OrderIndex: 6,
        ValueType: "boolean",
      },
      {
        ColumnDefinition: "Delete",
        ColumnName: "Delete",
        OrderIndex: 7,
        ValueType: "boolean",
      },
      {
        ColumnDefinition: "DocVersion",
        ColumnName: "Doc Version",
        Hidden: true,
        OrderIndex: 8,
        ValueType: "number",
      },
    ],
    Row: {
      SourceUrl: "ROLE-ACCESS-MAP",
    },
  },
};

export default function SystemTransactionRoleAccessMap() {
  return <Shifter ShifterData={data} />;
}
