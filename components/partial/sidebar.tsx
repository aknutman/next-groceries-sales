import * as Solid20Icon from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";
import { Item, MenuItem, SidebarModel } from "./sidebar/sidebar.model";
import { DefaultSidebarMenu } from "./sidebar/sidebar.data";

import { MenuButton } from "./sidebar/MenuButton";

interface ChildType {
  ChildItem?: Item[];
  ParentItem?: Item;
}

// interface MenuItemClick extends MenuItem {
//   onItemClick: any;
// }

export default function Sidebar() {
  const [selectedItem, setSelectedItem] = React.useState({} as ChildType);

  console.log("selectedItem: ", selectedItem.ChildItem);

  let nowItem: ChildType = {
    ChildItem: DefaultSidebarMenu.MenuItem[2].Child,
    ParentItem: DefaultSidebarMenu.MenuItem[2],
  };

  function handleItemClick(item: any) {
    console.log("handleItemClick is hit: ", item);
  }

  if (!selectedItem.ChildItem) {
    return (
      <ParentSideBar
        Header={DefaultSidebarMenu.Header}
        MenuItem={DefaultSidebarMenu.MenuItem}
      />
    );
  }

  return (
    // <ParentSideBar
    //   Header={DefaultSidebarMenu.Header}
    //   MenuItem={DefaultSidebarMenu.MenuItem}
    // />
    <ChildSideBar
      ChildItem={nowItem.ChildItem}
      ParentItem={nowItem.ParentItem}
    />
  );
}

function ChildSideBar({ ChildItem, ParentItem }: ChildType) {
  function handleBackClick() {
    console.log("Back is clicked");
  }

  function handleItemClick(key: string) {
    console.log("Child Item is clicked with value: ", key);
  }

  return (
    <div className="flex flex-col bg-white rounded-md shadow-lg w-full h-full p-2 border-r-2">
      <div className="basis-1/12">
        <MenuButton
          key={ParentItem?.Value}
          Icon={Solid20Icon.ArrowSmallLeftIcon}
          Name={String(ParentItem?.Name)}
          Child={undefined}
          Value={String(ParentItem?.Value)}
          Description={String(ParentItem?.Description)}
          UrlSlug={[]}
          onItemClick={() => handleBackClick()}
        />
      </div>
      <div className="basis-11/12">
        {ChildItem?.map((item) => (
          <MenuButton
            key={item.Value}
            Icon={item.Icon}
            Name={item.Name}
            Value={item.Value}
            Description={item.Description}
            UrlSlug={item.UrlSlug}
            onItemClick={() => handleItemClick(item.Value)}
          />
        ))}
      </div>
    </div>
  );
}

function ParentSideBar({ MenuItem }: SidebarModel, onItemClick: any) {
  MenuItem.forEach((item) => {
    console.log("item.Value of MenuItem: ", item.Value);
  });

  function handleItemClick(key: string) {
    console.log("Parent Item is clicked with key: ", key);
  }

  return (
    <div className="flex flex-col bg-white rounded-md shadow-lg w-full h-full p-2 border-r-2">
      <div className="basis-1/12 pt-4 pl-3">
        <Image
          className="mx-auto h-12 w-12 inline-block align-middle"
          src="/Images/mark.svg"
          height="12"
          width="12"
          alt="Your Company"
        />
      </div>
      <div className="basis-10/12">
        <>
          {MenuItem.map((item) => (
            <MenuButton
              key={item.Value}
              Icon={item.Icon}
              Name={item.Name}
              Child={item.Child}
              Value={item.Value}
              Description={item.Description}
              UrlSlug={item.UrlSlug}
              onItemClick={() => handleItemClick(item.Value)}
            />
          ))}
        </>
      </div>
      <div className="basis-1/12">Footer</div>
    </div>
  );
}
