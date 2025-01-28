import React from "react";
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// Import deleteDoc and doc from Firebase Firestore
import { deleteDoc, doc } from "firebase/firestore";
// Import your Firestore database instance
import { db } from "../firebase"; // Adjust the import path based on your project structure
import { motion } from "framer-motion";

const Mail = () => {
  const navigate = useNavigate();
  const { selectedEmail } = useSelector((store) => store.appSlice);
  const params = useParams();

  // Function to delete the email by ID
  const deleteMailById = async (id) => {
    try {
      const emailRef = doc(db, "emails", id); // Get a reference to the document
      await deleteDoc(emailRef); // Delete the document
      navigate("/"); // Navigate back to the main page
    } catch (error) {
      console.error("Error deleting email:", error);
    }
  };

  if (!selectedEmail) {
    return (
      <div className="flex-1 bg-white rounded-xl mx-5 p-4">
        <h1 className="text-center text-gray-500 text-lg">No email selected</h1>
      </div>
    );
  }

  return (
    <motion.div 
    initial={{opacity:0, y:20}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.5}}
    className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div
            onClick={() => navigate("/")}
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <IoMdArrowBack size="20px" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <BiArchiveIn size="20px" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineReport size="20px" />
          </div>
          <div
            onClick={() => deleteMailById(params.id)}
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <MdDeleteOutline size="20px" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineMarkEmailUnread size="20px" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineWatchLater size="20px" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineAddTask size="20px" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineDriveFileMove size="20px" />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size="20px" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowLeft size="24px" />
          </button>
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowRight size="24px" />
          </button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto p-4">
        <div className="flex flex-col bg-white gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">
              {selectedEmail?.subject || "No Subject"}
            </h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">inbox</span>
          </div>
          <div className="absolute right-10 text-gray-400 text-sm">
            <p>
              {new Date(selectedEmail?.createdAt?.seconds * 1000).toUTCString()}
            </p>
          </div>
          <div className="text-gray-500 text-sm">
            <h1>{selectedEmail?.to}</h1>
            <span>to me</span>
          </div>
          <div className="my-10">
            <p>{selectedEmail?.message}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Mail;
