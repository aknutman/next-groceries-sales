import Image from "next/image";
import { Footer } from "./sidebar.model";

export function FooterButton({ Name, ImageUrl }: Footer) {
  return (
    <button className="flex flex-row ml-3 mt-5 ">
      <Image
        className="h-12 w-12 rounded-full"
        src={ImageUrl}
        height={48}
        width={48}
        alt="Your Company"
      />
      <div className="flex flex-col ml-3 text-left">
        <span className="text-gray-200 text-base font-bold">{Name}</span>
        <span className="text-gray-300 text-sm">View Profile</span>
      </div>
    </button>
  );
}
