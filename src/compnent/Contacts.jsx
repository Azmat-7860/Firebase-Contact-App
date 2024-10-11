import React from "react";
import { IoIosContact } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";

const Contacts = ({ data }) => {
  // console.log(data);

  return (
    <div className="my-contactBox m-3 d-flex align-items-center  gap-2 ">
      <IoIosContact className="cb-btn" />
      <div className=" w-100 d-flex justify-content-between align-items-center">
        <div className="my-data mt-2 gap-2">
          <h5 className="my-name m-0">{data.name}</h5>
          <p className="my-email">{data.email}</p>
        </div>
        <div className=" w-100 d-flex justify-content-evenly">
          <FaUserEdit className="cb-editBtn" />
          <MdOutlineDeleteSweep className="cb-editBtn" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
