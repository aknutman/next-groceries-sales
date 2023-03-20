import React from "react";
import { useRouter } from "next/router";

import { Item } from "./sidebar/sidebar.model";
import { DefaultSidebarMenu } from "./sidebar/sidebar.data";

import { ChildSideBar, ChildType } from "./sidebar/child.sidebar";
import { ParentSideBar } from "./sidebar/parent.sidebar";

/**
 * PLEASE REFACTOR
 * Using React Context!
 */

export default function Sidebar() {
  let router = useRouter();

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
        router.push(item.UrlSlug.join(""));
      }
    }
  }

  if (!selectedItem.ChildItem) {
    return (
      <ParentSideBar
        MenuItem={DefaultSidebarMenu.MenuItem}
        Footer={DefaultSidebarMenu.Footer}
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
