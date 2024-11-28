"use client";
import React, { useState } from "react";
import CardsContainer from "../cardsContainer";

const BigContainer = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
      {/* <div className="w-full border my-4"></div> */}
      <CardsContainer />
    </div>
  );
};

export default BigContainer;
