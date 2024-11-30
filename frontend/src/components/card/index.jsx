import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import { BiDetail } from "react-icons/bi";

const Card = ({
  det,
  setDet,
  item,
  deleteCard,
  getDetailsCard,
  setUCard,
  uCard,
}) => {
  return (
    <div className="flex w-full justify-between bg-black bg-opacity-30 gap-2 rounded-xl p-2 border">
      <span>{item.title}</span>
      <div className="flex gap-1 items-center justify-center">
        <BiDetail
          size={20}
          className="cursor-pointer hover:scale-125 duration-300 transition mr-[2px]"
          onClick={() => {
            setDet(!det), getDetailsCard(item._id);
          }}
        />
        <LiaEditSolid
          size={20}
          className="cursor-pointer hover:scale-125 duration-300 transition"
          onClick={() => {
            setUCard(!uCard), getDetailsCard(item._id);
          }}
        />
        <MdDeleteForever
          size={20}
          className="cursor-pointer hover:scale-125 duration-300 transition"
          onClick={() => deleteCard(item._id)}
        />
      </div>
    </div>
  );
};

export default Card;
