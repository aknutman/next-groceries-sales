import * as Solid20Icon from "@heroicons/react/24/outline";
import { SidebarModel } from "./sidebar.model";

export const DefaultSidebarMenu: SidebarModel = {
  Header: {
    Title: "Jadist Home Page",
    Description: "Jadist Description.. What the hail",
  },
  MenuItem: [
    {
      Icon: Solid20Icon.HomeIcon,
      Name: "Home",
      Value: "home",
      Description: "",
      UrlSlug: ["/", "home"],
    },
    {
      Icon: Solid20Icon.UsersIcon,
      Name: "Users",
      Value: "users",
      Description: "User List & Role",
      UrlSlug: [""],
      Child: [
        {
          Icon: Solid20Icon.CircleStackIcon,
          Name: "Access Object",
          Value: "access-object",
          Description: "Contains the list of Accessible Object by User",
          UrlSlug: ["/", "s", "/", "system-master-access-object"],
        },
        {
          Icon: Solid20Icon.PuzzlePieceIcon,
          Name: "Role Access Map",
          Value: "role-access-map",
          Description: "Creating a map between User Role and the Access Object",
          UrlSlug: ["/", "s", "/", "system-transc-role-access-map"],
        },
        {
          Icon: Solid20Icon.LockClosedIcon,
          Name: "User Role",
          Value: "user-role",
          Description: "Contains the list of Applicable Role to Users",
          UrlSlug: ["/", "s", "/", "system-master-user-role"],
        },
        {
          Icon: Solid20Icon.UsersIcon,
          Name: "User List",
          Value: "user-list",
          Description: "Contains the list of User registered in system",
          UrlSlug: ["/", "s", "/", "system-master-user-list"],
        },
      ],
    },
    {
      Icon: Solid20Icon.MapIcon,
      Name: "Addresses",
      Value: "address",
      Description: "Master data of Addresses",
      UrlSlug: [""],
      Child: [
        {
          Icon: Solid20Icon.Square3Stack3DIcon,
          Name: "Address Type",
          Value: "address-type",
          Description: "",
          UrlSlug: ["/", "s", "/", "system-master-address-type"],
        },
        {
          Icon: Solid20Icon.RectangleStackIcon,
          Name: "Address Component",
          Value: "address-component",
          Description: "",
          UrlSlug: ["/", "s", "/", "system-master-address-component"],
        },
        {
          Icon: Solid20Icon.MapPinIcon,
          Name: "User Address",
          Value: "user-address",
          Description: "",
          UrlSlug: ["/", "s", "/", "system-master-user-address"],
        },
      ],
    },
    {
      Icon: Solid20Icon.ShoppingCartIcon,
      Name: "[T] Sales",
      Value: "transaction-sales",
      Description: "Transaction of Sales Activity",
      UrlSlug: [],
      Child: [
        {
          Icon: Solid20Icon.DocumentIcon,
          Name: "Quotation",
          Value: "sales-transaction-quotation",
          Description: "Sales Transaction of Quotations",
          UrlSlug: ["/", "s", "/", "sales-transaction-quotations"],
        },
        {
          Icon: Solid20Icon.DocumentTextIcon,
          Name: "Quotation Detail",
          Value: "sales-transaction-quotation-detail",
          Description: "Sales Transaction of Quotation Detail",
          UrlSlug: ["/", "s", "/", "sales-transaction-quotation-detail"],
        },
      ],
    },
  ],
  Footer: {
    Name: "Eldest Pasirula",
    ImageUrl: "/Images/tom-cook.avif",
  },
};
