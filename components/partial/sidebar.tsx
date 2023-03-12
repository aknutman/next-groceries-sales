import * as Solid20Icon from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";
import { Item, MenuItem } from "./sidebar/sidebar.model";
import { DefaultSidebarMenu } from "./sidebar/sidebar.data";

import { MenuButton } from "./sidebar/MenuButton";

/**
 * PLEASE REFACTOR
 * Using React Context!
 */

interface ChildType {
  ChildItem?: Item[];
  ParentItem?: Item;
  onItemClick?: any;
}

interface ParentType {
  MenuItem: MenuItem[];
  onItemClick?: any;
}

export default function Sidebar() {
  const [selectedItem, setSelectedItem] = React.useState({} as ChildType);

  let nowItem: ChildType = {
    ChildItem: DefaultSidebarMenu.MenuItem[2].Child,
    ParentItem: DefaultSidebarMenu.MenuItem[2],
  };

  function handleItemClick(item: Item) {
    if (item === null) {
      setSelectedItem({ ChildItem: undefined });
    } else {
      const child = DefaultSidebarMenu.MenuItem.filter(
        (i) => i.Value === item.Value
      )[0]?.Child;

      if (child && child.length > 0) {
        setSelectedItem({
          ChildItem: child,
          ParentItem: item,
        } as ChildType);
      } else {
        console.log("No Child, please load the body from url: ", item.UrlSlug);
      }
    }
  }

  if (!selectedItem.ChildItem) {
    return (
      <ParentSideBar
        MenuItem={DefaultSidebarMenu.MenuItem}
        onItemClick={(item: Item) => {
          handleItemClick(item);
        }}
      />
    );
  }

  return (
    <ChildSideBar
      ChildItem={nowItem.ChildItem}
      ParentItem={nowItem.ParentItem}
      onItemClick={(ckey: any) => {
        handleItemClick(ckey);
      }}
    />
  );
}

function ChildSideBar({ ChildItem, ParentItem, onItemClick }: ChildType) {
  function handleBackClick() {
    onItemClick(null);
  }

  function handleItemClick(item: Item) {
    onItemClick(item);
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
            onItemClick={() => handleItemClick(item)}
          />
        ))}
      </div>
    </div>
  );
}

function ParentSideBar({ MenuItem, onItemClick }: ParentType) {
  function handleItemClick(item: Item) {
    onItemClick(item);
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
              onItemClick={() => handleItemClick(item)}
            />
          ))}
        </>
      </div>
      <div className="basis-1/12">Footer</div>
    </div>
  );
}
