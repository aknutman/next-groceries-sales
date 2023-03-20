import { Column } from "./model/table.model";
import CTHead from "./cthead.table.shifter";
import CTBody from "./ctbody.table.shifter";

interface Props {
  ColumnModel: Column[];
}
export default function TableShifter({ ColumnModel }: Props) {
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

/**
 * DONT FORGET TO MOVE BELOW DATA
 */
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
