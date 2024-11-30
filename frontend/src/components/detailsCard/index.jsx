import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const DetailsCard = ({ det, setDet, detailsCardData }) => {
  return (
    <div className="absolute left-0 top-0 w-screen h-screen bg-black bg-opacity-75 flex items-center justify-center">
      <div className="w-[500px] min-h-72 bg-white text-black rounded-xl flex-col p-3">
        <div className="w-full flex justify-between items-center">
          <span className="text-xl font-medium">{detailsCardData.title}</span>
          <IoCloseCircleOutline
            size={32}
            className="cursor-pointer text-red-700"
            onClick={() => setDet(!det)}
          />
        </div>
        <div className="border flex w-full my-1"></div>
        <div className="mt-2">
          <span className="">{detailsCardData.content}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
