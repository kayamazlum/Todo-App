import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const UpdateCardContainer = ({
  uCard,
  setUCard,
  detailsCardData,
  setDetailsCardData,
  handleUpdate,
}) => {
  return (
    <div className="absolute left-0 top-0 w-screen h-screen bg-black bg-opacity-75 flex items-center justify-center">
      <div className="w-[500px] min-h-72 bg-white text-black rounded-xl flex-col p-3">
        <div className="w-full flex justify-between items-center">
          <span className="text-lg">Update Card</span>
          <IoCloseCircleOutline
            size={32}
            className="cursor-pointer text-red-700"
            onClick={() => setUCard(!uCard)}
          />
        </div>
        <div className="border flex w-full my-1"></div>
        <div className="mt-2">
          <form className="gap-2 flex flex-col">
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="font-medium text-lg">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={detailsCardData.title || ""}
                onChange={(e) =>
                  setDetailsCardData({
                    ...detailsCardData,
                    title: e.target.value,
                  })
                }
                className="rounded-xl text-black py-1 px-2 focus:outline-green-600 border border-gray-400"
                placeholder="(Cannot be empty)"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="content" className="font-medium text-lg">
                Content
              </label>
              <textarea
                rows="3"
                type="text"
                value={detailsCardData.content || ""}
                onChange={(e) =>
                  setDetailsCardData({
                    ...detailsCardData,
                    content: e.target.value,
                  })
                }
                id="content"
                placeholder="(You don't have to)"
                className="rounded-xl text-black py-1 px-2 resize-y max-h-40 min-h-20 focus:outline-green-600 border border-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full border rounded-xl mt-2 py-1 bg-green-700 text-white hover:border-black hover:bg-green-800 transition duration-1000"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCardContainer;
