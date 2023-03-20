import Shifter from "../../../components/shifter/shifter";
import { ShifterModel } from "../../../components/shifter/model/shifter.model";

const data: ShifterModel = {
  TopBar: {
    Hide: false,
    Title: "User Role",
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
        ColumnDefinition: "UniqueCode",
        ColumnName: "Unique Code",
        OrderIndex: 2,
      },
      {
        ColumnDefinition: "RoleName",
        ColumnName: "Role Name",
        OrderIndex: 3,
      },
      {
        ColumnDefinition: "RoleDescription",
        ColumnName: "Role Description",
        ValueType: "richtext",
        OrderIndex: 4,
      },
      {
        ColumnDefinition: "DocVersion",
        ColumnName: "Doc Version",
        Hidden: true,
        OrderIndex: 5,
        ValueType: "number",
      },
    ],
    Row: {
      SourceUrl: "USER-ROLE",
    },
  },
};

export default function SystemMasterUserRole() {
  return <Shifter ShifterData={data} />;
}
