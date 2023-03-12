import * as Solid20Icon from "@heroicons/react/20/solid";

import React from "react";
import { Item, MenuItem } from "./sidebar/sidebar.model";
import { DefaultSidebarMenu } from "./sidebar/sidebar.data";

import { ChildSideBar, ChildType } from "./sidebar/child.sidebar";
import { ParentSideBar, ParentType } from "./sidebar/parent.sidebar";

/**
 * PLEASE REFACTOR
 * Using React Context!
 */

export default function Sidebar() {
  const [selectedItem, setSelectedItem] = React.useState({} as ChildType);

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
      ChildItem={selectedItem.ChildItem}
      ParentItem={selectedItem.ParentItem}
      onItemClick={(ckey: any) => {
        handleItemClick(ckey);
      }}
    />
  );
}
