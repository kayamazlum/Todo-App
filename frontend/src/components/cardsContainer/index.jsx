"use client";
import React from "react";
import Card from "../card";

const CardsContainer = ({
  det,
  setDet,
  getAllCardData,
  deleteCard,
  getDetailsCard,
  setUCard,
  uCard,
  setSelectedCard,
}) => {
  return (
    <div className="bg-green-500 flex flex-col gap-2 w-full rounded-xl bg-gradient-to-r p-2 border from-sky-600  to-purple-700">
      <span className="font-medium text-lg text-center">Todo List</span>
      {getAllCardData?.map((item) => {
        return (
          <Card
            det={det}
            setDet={setDet}
            key={item._id}
            item={item}
            deleteCard={deleteCard}
            getDetailsCard={getDetailsCard}
            uCard={uCard}
            setUCard={setUCard}
            setSelectedCard={setSelectedCard}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
