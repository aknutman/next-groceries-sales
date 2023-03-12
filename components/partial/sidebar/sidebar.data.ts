import * as Solid20Icon from "@heroicons/react/20/solid";
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
        // {
        //   Icon: "wysiwyg",
        //   Name: "Access Object",
        //   Value: "access-object",
        //   Description: "Contains the list of Accessible Object by User",
        //   UrlSlug: ["/", "access-object"],
        // },
        // {
        //   Icon: "lock_person",
        //   Name: "Role Access Map",
        //   Value: "role-access-map",
        //   Description: "Creating a map between User Role and the Access Object",
        //   UrlSlug: ["/", "role-access-map"],
        // },
        // {
        //   Icon: "policy",
        //   Name: "User Role",
        //   Value: "user-role",
        //   Description: "Contains the list of Applicable Role to Users",
        //   UrlSlug: ["/", "user-role"],
        // },
        // {
        //   Icon: "person",
        //   Name: "User List",
        //   Value: "user-list",
        //   Description: "Contains the list of User registered in system",
        //   UrlSlug: ["/", "user-list"],
        // },
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
          UrlSlug: ["/", "address-type"],
        },
        {
          Icon: Solid20Icon.RectangleStackIcon,
          Name: "Address Component",
          Value: "address-component",
          Description: "",
          UrlSlug: ["/", "address-component"],
        },
        {
          Icon: Solid20Icon.MapPinIcon,
          Name: "User Address",
          Value: "user-address",
          Description: "",
          UrlSlug: ["/", "user-address"],
        },
      ],
    },
    {
      Icon: Solid20Icon.ShoppingCartIcon,
      Name: "[T] Sales",
      Value: "transaction-sales",
      Description: "Transaction of Sales Activity",
      UrlSlug: [""],
      Child: [
        // {
        //   Icon: "description",
        //   Name: "Quotation",
        //   Value: "sales-transaction-quotation",
        //   Description: "Sales Transaction of Quotations",
        //   UrlSlug: ["/", "sales-transaction-quotations"],
        // },
        // {
        //   Icon: "description",
        //   Name: "Quotation Detail",
        //   Value: "sales-transaction-quotation",
        //   Description: "Sales Transaction of Quotation Detail",
        //   UrlSlug: ["/", "sales-transaction-quotation-detail"],
        // },
      ],
    },
  ],
};
