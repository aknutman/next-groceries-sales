import { Column } from "./table.model";

interface TableColumn {
  ColumnModel: Column[];
}
export default function TableShifter({ ColumnModel }: TableColumn) {
  const orderedColumn = ColumnModel.slice().sort(
    (n1: Column, n2: Column) => n1.OrderIndex - n2.OrderIndex
  );

  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
      <table className="w-full">
        <CTHead Column={orderedColumn} />
        <CTBody Column={orderedColumn} RowData={DATA} />
      </table>
    </div>
  );
}

interface ColumnType {
  Column: Column[];
}
function CTHead({ Column }: ColumnType) {
  return (
    <thead>
      <tr className="border-b">
        {Column.filter((col) => !col.Hidden).map((col) => (
          <th key={col.ColumnDefinition} className="p-4 text-left">
            {col.ColumnName}
          </th>
        ))}
      </tr>
    </thead>
  );
}

interface RowType {
  Column: Column[];
  RowData: any[];
}
function CTBody({ RowData, Column }: RowType) {
  return (
    <tbody>
      {RowData.map((row) => (
        <tr
          key={row.Id}
          className="border-b hover:cursor-pointer hover:bg-indigo-50"
        >
          {Column.filter((col) => !col.Hidden).map((col) => (
            <td
              key={String(row.Id).concat(
                ".",
                String(col.ColumnDefinition),
                ".",
                row[String(col.ColumnDefinition)]
              )}
              className="p-3"
            >
              {row[String(col.ColumnDefinition)]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

/**
 * DONT FORGET TO MOVE BELOW DATA
 */
// export const ColumnModel: Column[] = [
//   {
//     ColumnDef: "Id",
//     Header: "Id",
//     Cell: (element: Record<string, any>) => `${element["Id"]}`,
//     Id: true,
//     Readonly: true,
//     OrderIndex: 1,
//   },
//   {
//     ColumnDef: "Username",
//     Header: "Username",
//     Cell: (element: Record<string, any>) => `${element["Username"]}`,
//     OrderIndex: 2,
//     Required: true,
//   },
//   {
//     ColumnDef: "EmailAddress",
//     Header: "Email Address",
//     Cell: (element: Record<string, any>) => `${element["EmailAddress"]}`,
//     OrderIndex: 3,
//     Required: true,
//   },
//   {
//     ColumnDef: "FullName",
//     Header: "Full Name",
//     Cell: (element: Record<string, any>) => `${element["FullName"]}`,
//     OrderIndex: 4,
//   },
//   {
//     ColumnDef: "PhoneNo",
//     Header: "Phone No",
//     Cell: (element: Record<string, any>) => `${element["PhoneNo"]}`,
//     OrderIndex: 5,
//     ValueType: "number",
//     Required: true,
//   },
//   {
//     ColumnDef: "UserRoleReference",
//     Header: "User Role Reference",
//     Cell: (element: Record<string, any>) => `${element["UserRoleReference"]}`,
//     OrderIndex: 6,
//     ValueType: "options",
//     Options: {
//       List: [],
//       RemoteUrl: {
//         FirestoreCollectionName: "USER-ROLE",
//       },
//     },
//     Required: true,
//   },
//   {
//     ColumnDef: "DocVersion",
//     Header: "Doc Version",
//     Cell: (element: Record<string, any>) => `${element["DocVersion"]}`,
//     Hidden: true,
//     OrderIndex: 7,
//     ValueType: "number",
//   },
// ];

const DATA: any[] = [
  {
    Id: "4JniPdj6iVQkvFF1DWES",
    UserRoleReference: "USER-ROLE/2",
    EmailAddress: "try@gain.user",
    DocVersion: 1,
    FullName: "Try Again User",
    PhoneNo: 9899999000000,
    Username: "TryAgainUser",
  },
  {
    Id: "8pjezXtZm1uWuKc7efaV",
    EmailAddress: "me@me.me",
    FullName: "me",
    Username: "check",
    UserRoleReference: "USER-ROLE/1",
    DocVersion: "1",
    PhoneNo: "99006113",
  },
  {
    Id: "ApLN4QnVRXLct8LUhmCt",
    Username: "qwerty",
    PhoneNo: 1234567890,
    DocVersion: 1,
    EmailAddress: "",
    UserRoleReference: "undefined",
    FullName: "",
  },
  {
    Id: "E45M71ITlaSDSpELWccr",
    FullName: "Agaleonman",
    EmailAddress: "agaleonman@gmail.com",
    PhoneNo: "8912010101012222222",
    DocVersion: "1",
    Username: "agaleonman",
    UserRoleReference: "/USER-ROLE/asdasdasd",
  },
  {
    Id: "OFnelLQHfc8fk3vCnlIF",
    PhoneNo: "919191919100000",
    UserRoleReference: "/USER-ROLE/newusername",
    DocVersion: "1",
    EmailAddress: "new@user.name",
    Username: "NewUsername",
    FullName: "New User Name",
  },
  {
    Id: "UserListSuperAdminKey",
    Username: "sa",
    DocVersion: 1,
    EmailAddress: "aknutman@gmail.com",
    FullName: "Super Admin",
    PhoneNo: 621234567890,
    UserRoleReference: "USER-ROLE/2",
  },
  {
    Id: "ZVKPdS5lHzsH49nBWxQI",
    UserRoleReference: "undefined",
    Username: "aaabbb",
    DocVersion: 1,
    EmailAddress: "aa@aa.aa",
    FullName: "aaa",
    PhoneNo: 0,
  },
];
