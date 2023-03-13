import Image from "next/image";
import { MenuButton } from "./MenuButton";
import { FooterButton } from "./FooterButton";
import { Item, MenuItem, Footer } from "./sidebar.model";

export interface ParentType {
  MenuItem: MenuItem[];
  onItemClick?: any;
  Footer: Footer;
}

export function ParentSideBar({ MenuItem, Footer, onItemClick }: ParentType) {
  function handleItemClick(item: Item) {
    onItemClick(item);
  }

  return (
    <div className="flex flex-col bg-indigo-700 shadow-lg w-full h-full p-2">
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
      <hr className="box-border border-double border-indigo-900 border-1" />
      <div className="basis-1/12">
        <FooterButton Name={Footer.Name} ImageUrl={Footer.ImageUrl} />
      </div>
    </div>
  );
}
