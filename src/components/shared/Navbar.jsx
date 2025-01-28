import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../../redux/appSlice";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);
  const {user} = useSelector(store=>store.appSlice);
  const dispatch = useDispatch();

  const signOutHandler = () =>{
    signOut(Auth).then(()=>{
      dispatch(setUser(null));
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(() => {
    dispatch(setSearchText(input));
  }, [input]);

  return (
    <div className="flex items-center justify-between mx-3 h-16">
      {/* Left Section: Logo and Hamburger */}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
            alt="gmail-logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>

      {/* Center Section: Search Bar */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[40%]">
        {/* Centered Search Bar */}
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={"24px"} className="text-gray-700" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center gap-2">
        <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
          <CiCircleQuestion size={"20px"} />
        </div>
        <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
          <CiSettings size={"20px"} />
        </div>
        <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
          <PiDotsNineBold size={"20px"} />
        </div>
        <div className="cursor-pointer">
          <Avatar
            onClick={() => setToggle(!toggle)}
            src={user?.photoURL}
            size="40"
            round={true}
          />
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.1 }}
                className="absolute right-2 z-20 shadow-lg bg-white rounded-md"
              >
                <p onClick={signOutHandler} className="p-2 underline">LogOut</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
