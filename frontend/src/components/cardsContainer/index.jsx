import React from "react";
import Card from "../card";

const CardsContainer = () => {
  return (
    <div className="bg-green-500 flex flex-col gap-2 w-full rounded-xl bg-gradient-to-r p-2 border from-sky-600  to-purple-700">
      <span className="font-medium text-lg text-center">Todo List</span>
      <Card />
    </div>
  );
};

export default CardsContainer;
