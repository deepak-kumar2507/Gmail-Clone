// Import necessary libraries and components
import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import { MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/appSlice";

// Define sidebar items with associated icons and text
const sidebarItems = [
  {
    icon: <LuPencil size={"24px"} />,
    text: "Inbox",
  },
  {
    icon: <IoMdStar size={"24px"} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"24px"} />,
    text: "Snoozed",
  },
  {
    icon: <TbSend2 size={"24px"} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={"24px"} />,
    text: "Drafts",
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"24px"} />,
    text: "More",
  },
];

// Sidebar component definition
const Sidebar = () => {
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="w-[15%]">
      {/* Compose button */}
      <div className="p-3">
        <button onClick={()=> dispatch(setOpen(true))} className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]">
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>

      {/* Sidebar items */}
      <div className="text-gray-500">
        {sidebarItems.map((item, index) => {
          return (
            <div
              key={index} // Add key for each item
              className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2"
            >
              {item.icon}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
