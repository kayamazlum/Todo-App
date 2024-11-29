"use client";
import React, { useState } from "react";
import CardsContainer from "../cardsContainer";
import { IoCloseCircleOutline } from "react-icons/io5";

const BigContainer = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [det, setDet] = useState(false);
  console.log(det);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("Title cannot be empty!");
      return;
    }
    console.log("Form submitted successfully!");
    setTitle("");
    setContent("");
  };

  return (
    <div className="inline-flex w-[400px] flex-col bg-gradient-to-l from-sky-600  to-purple-700 border py-4 px-6 items-center mt-4 rounded-xl gap-4">
      <h1 className="font-bold text-2xl">My To-Do App</h1>
      <div className="w-full">
        <form onSubmit={handleSubmit} className="gap-2 flex flex-col">
          <div className="flex flex-col gap-1">
            <label htmlFor="title" className="font-medium text-lg">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="rounded-xl text-black py-1 px-2 "
              value={title}
              placeholder="(Cannot be empty)"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="content" className="font-medium text-lg">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="3"
              type="text"
              id="content"
              placeholder="(You don't have to)"
              className="rounded-xl text-black py-1 px-2 resize-y max-h-40 min-h-20 "
            />
          </div>
          <button
            type="submit"
            className="w-full border rounded-xl mt-2 py-1 hover:bg-black transition duration-1000"
          >
            Save
          </button>
        </form>
      </div>
      <div className="w-full border border-dashed my-4"></div>
      <CardsContainer det={det} setDet={setDet} />
      {det ? (
        <div className="absolute left-0 top-0 w-screen h-screen bg-black bg-opacity-75 flex items-center justify-center">
          <div className="w-[500px] min-h-72 bg-white text-black rounded-xl flex-col p-3">
            <div className="w-full flex justify-between items-center">
              <span className="text-xl font-medium">Title</span>
              <IoCloseCircleOutline
                size={32}
                className="cursor-pointer"
                onClick={() => setDet(!det)}
              />
            </div>
            <div className="mt-2">
              <span className="">
                Burada içerikler olacak. Burada içerikler olacakBurada içerikler
                olacakBurada içerikler olacakBurada içerikler olacakBurada
                içerikler olacakBurada içerikler olacakBurada içerikler olacak.
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default BigContainer;
