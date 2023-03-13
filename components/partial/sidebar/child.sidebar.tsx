import * as Solid20Icon from "@heroicons/react/24/outline";
import { MenuButton } from "./MenuButton";
import { Item } from "./sidebar.model";

export interface ChildType {
  ChildItem?: Item[];
  ParentItem?: Item;
  onItemClick?: any;
}

export function ChildSideBar({
  ChildItem,
  ParentItem,
  onItemClick,
}: ChildType) {
  function handleBackClick() {
    onItemClick(null);
  }

  function handleItemClick(item: Item) {
    onItemClick(item);
  }

  return (
    <div className="flex flex-col bg-indigo-700 shadow-lg w-full h-full p-2 border-r-2">
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
