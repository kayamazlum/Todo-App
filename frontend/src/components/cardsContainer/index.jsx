"use client";
import React, { useEffect, useState } from "react";
import Card from "../card";
import axios from "axios";

const CardsContainer = ({ det, setDet }) => {
  const [getAllCardData, setAllCardData] = useState([]);
  const getAllCards = async () => {
    const allCard = await axios.get("http://localhost:4000/all");
    setAllCardData(allCard.data.cards);
  };
  useEffect(() => {
    getAllCards();
  }, []);
  return (
    <div className="bg-green-500 flex flex-col gap-2 w-full rounded-xl bg-gradient-to-r p-2 border from-sky-600  to-purple-700">
      <span className="font-medium text-lg text-center">Todo List</span>
      {getAllCardData?.map((item) => {
        return <Card det={det} setDet={setDet} key={item._id} item={item} />;
      })}
    </div>
  );
};

export default CardsContainer;
