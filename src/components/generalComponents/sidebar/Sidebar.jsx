import { sidebarListItems } from "@/constants/sidebar";
import React from "react";

export const Sidebar = () => {
  return (
    <div className="h-full w-[264px] flex flex-col gap-2 bg-white">
      <div className="w-full h-20 flex justify-center align-middle h-[82px]">
        <img
          src="https://res.cloudinary.com/dym0xfe7y/image/upload/v1734798561/amrytlogo.svg"
          className="h-[34px] w-[224px] m-auto"
        />
      </div>
      {sidebarListItems.map((item, index) => (
        <SidebarListItem isSelected={index === 0} listItemDetail={item} />
      ))}
    </div>
  );
};

const SidebarListItem = ({ listItemDetail, isSelected }) => {
  const { name, icon } = listItemDetail;
  return isSelected ? (
    <div
      className={`h-12 border-l-4 w-full border-primary bg-secondary flex  text-primary`}
    >
      <img className="ml-6 w-6 h-6 my-auto" src={icon} />
      <div className="h-min ml-2 my-auto">
        <p className="font-semibold text-sm">{name}</p>
      </div>
    </div>
  ) : (
    <div
      className={`h-12 border-l-4 w-full border-transparent  flex  text-primary`}
    >
      <img className="ml-6 w-6 h-6 my-auto" src={icon} />
      <div className="h-min ml-2 my-auto">
        <p className="font-semibold text-sm">{name}</p>
      </div>
    </div>
  );
};
