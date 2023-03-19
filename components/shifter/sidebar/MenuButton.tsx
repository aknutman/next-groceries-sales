import * as Solid20Icon from "@heroicons/react/24/outline";
import { MenuItem } from "./sidebar.model";

interface MenuItemClick extends MenuItem {
  onItemClick: any;
}

export function MenuButton({ Icon, Name, Child, onItemClick }: MenuItemClick) {
  if (Child?.length && Child.length > 0) {
    return (
      <button
        className="group flex flex-row w-full items-center rounded-md px-3 py-3 text-base hover:bg-indigo-800"
        onClick={onItemClick}
      >
        <SelectMiniIcon iconName={Icon} />
        <span className="flex-none text-gray-300 font-semibold ml-2">
          {Name}
        </span>
        <div className="grow">
          {/* Empty Space to set next icon to the right */}
        </div>
        <SelectMiniIcon iconName={Solid20Icon.ChevronRightIcon} />
      </button>
    );
  }

  return (
    <button
      className="group flex w-full items-center rounded-md px-3 py-3 text-base hover:bg-indigo-800"
      onClick={onItemClick}
    >
      <SelectMiniIcon iconName={Icon} />
      <span className="text-gray-300 font-semibold ml-2">{Name}</span>
    </button>
  );
}

function SelectMiniIcon({ iconName }: any) {
  switch (iconName) {
    case Solid20Icon.PencilIcon:
      return <Solid20Icon.PencilIcon className="w-6 h-6 text-gray-400" />;
    case Solid20Icon.HomeIcon:
      return <Solid20Icon.HomeIcon className="w-6 h-6 text-gray-400" />;
    case Solid20Icon.UsersIcon:
      return <Solid20Icon.UsersIcon className="w-6 h-6 text-gray-400" />;
    case Solid20Icon.MapIcon:
      return <Solid20Icon.MapIcon className="w-6 h-6 text-gray-400" />;
    case Solid20Icon.ShoppingCartIcon:
      return <Solid20Icon.ShoppingCartIcon className="w-6 h-6 text-gray-400" />;
    case Solid20Icon.Square3Stack3DIcon:
      return (
        <Solid20Icon.Square3Stack3DIcon className="w-6 h-6 text-gray-400" />
      );
    case Solid20Icon.RectangleStackIcon:
      return (
        <Solid20Icon.RectangleStackIcon className="w-6 h-6 text-gray-400" />
      );
    case Solid20Icon.MapPinIcon:
      return <Solid20Icon.MapPinIcon className="w-6 h-6 text-gray-400" />;
    case Solid20Icon.ChevronRightIcon:
      return <Solid20Icon.ChevronRightIcon className="w-6 h-6 text-gray-400" />;
    case Solid20Icon.ArrowSmallLeftIcon:
      return (
        <Solid20Icon.ArrowSmallLeftIcon className="w-6 h-6 text-gray-400" />
      );
    case Solid20Icon.LockClosedIcon:
      return <Solid20Icon.LockClosedIcon className="w-6 h-6 text-gray-400" />;
    case Solid20Icon.PuzzlePieceIcon:
      return <Solid20Icon.PuzzlePieceIcon className="w-6 h-6 text-gray-400" />;
    case Solid20Icon.CircleStackIcon:
      return <Solid20Icon.CircleStackIcon className="w-6 h-6 text-gray-400" />;
    case Solid20Icon.DocumentTextIcon:
      return <Solid20Icon.DocumentTextIcon className="w-6 h-6 text-gray-400" />;
    case Solid20Icon.DocumentIcon:
      return <Solid20Icon.DocumentIcon className="w-6 h-6 text-gray-400" />;

    default:
      return <Solid20Icon.HashtagIcon className="w-6 h-6 text-gray-400" />;
  }
}
