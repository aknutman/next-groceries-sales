import Shifter from "../../../components/full/shifter";
import { ShifterModel } from "../../../components/full/model/shifter.model";

const data: ShifterModel = {
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
        ColumnDefinition: "Username",
        ColumnName: "Username",
        OrderIndex: 2,
        Required: true,
      },
      {
        ColumnDefinition: "EmailAddress",
        ColumnName: "Email Address",
        OrderIndex: 3,
        Required: true,
      },
      {
        ColumnDefinition: "FullName",
        ColumnName: "Full Name",
        OrderIndex: 4,
      },
      {
        ColumnDefinition: "PhoneNo",
        ColumnName: "Phone No",
        OrderIndex: 5,
        ValueType: "number",
        Required: true,
      },
      {
        ColumnDefinition: "UserRoleReference",
        ColumnName: "User Role Reference",
        OrderIndex: 6,
        ValueType: "options",
        Options: {
          List: [],
        },
        Required: true,
      },
      {
        ColumnDefinition: "DocVersion",
        ColumnName: "Doc Version",
        Hidden: true,
        OrderIndex: 7,
        ValueType: "number",
      },
    ],
  },
};

export default function SystemMasterUserList() {
  return <Shifter ShifterData={data} />;
}
