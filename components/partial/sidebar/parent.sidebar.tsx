import Image from "next/image";
import { MenuButton } from "./MenuButton";
import { Item, MenuItem } from "./sidebar.model";

export interface ParentType {
  MenuItem: MenuItem[];
  onItemClick?: any;
}

export function ParentSideBar({ MenuItem, onItemClick }: ParentType) {
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
      <div className="basis-1/12 box-content border-t-2">Footer</div>
    </div>
  );
}
