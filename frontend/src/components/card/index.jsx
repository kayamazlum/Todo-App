"use client";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import { BiDetail } from "react-icons/bi";

const Card = ({ det, setDet, item }) => {
  return (
    <div className="flex w-full justify-between bg-black bg-opacity-30 gap-2 rounded-xl  p-2 border">
      <span>{item.title}</span>
      <div className="flex gap-1 items-center justify-center">
        <BiDetail
          size={20}
          className="cursor-pointer hover:scale-125 duration-300 transition mr-[2px]"
          onClick={() => setDet(!det)}
        />
        <LiaEditSolid
          size={20}
          className="cursor-pointer hover:scale-125 duration-300 transition"
        />
        <MdDeleteForever
          size={20}
          className="cursor-pointer hover:scale-125 duration-300 transition"
        />
      </div>
    </div>
  );
};

export default Card;
