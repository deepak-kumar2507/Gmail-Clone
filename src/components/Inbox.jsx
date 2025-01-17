import React, { useState } from "react";
import { MdCropSquare, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { GoTag } from "react-icons/go";
import { MdInbox } from "react-icons/md";
import Messages from "../components/Messages";
import Message from "./Message";

const mailType = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Primary",
  },
  {
    icon: <GoTag size={"20px"} />,
    text: "Promotions",
  },
  {
    icon: <FaUserFriends size={"20px"} />,
    text: "Social",
  },
];

const sampleMessages = [
  {
    id: 1,
    subject: "Welcome to your inbox!",
    body: "Enjoy your experience here.",
  },
  { id: 2, subject: "Promotions Today", body: "Check out our latest deals!" },
  {
    id: 3,
    subject: "Team Meeting",
    body: "Don't forget about tomorrow's meeting.",
  },
];

const Inbox = () => {
  const [mailTypeSelected, setTypeSelected] = useState(0); // state setter function name

  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
        <p className="text-sm text-gray-500">1-50 of 1000</p>
        <button className="hover:rounded-full hover:bg-gray-100"><MdKeyboardArrowLeft size="24px"/></button>
        <button className="hover:rounded-full hover:bg-gray-100"><MdKeyboardArrowRight size="24px"/></button>
      </div>
      </div>
      
      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => (
            <button
              key={index}
              className={`${
                mailTypeSelected === index
                  ? "border-b-4 border-b-blue-600 text-blue-600"
                  : "border-b-4 border-b-transparent"
              } flex items-center gap-5 p-4 w-52 hover:bg-gray-100`}
              onClick={() => setTypeSelected(index)} // function call
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>
        <Messages messages={sampleMessages} />
        <Message />
      </div>
    </div>
  );
};

export default Inbox;
