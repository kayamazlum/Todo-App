"use client";
import React, { useEffect, useState } from "react";
import CardsContainer from "../cardsContainer";
import DetailsCard from "../detailsCard";
import axios from "axios";
import UpdateCardContainer from "../updateCardContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BigContainer = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [det, setDet] = useState(false);

  // GET ALL CARD
  const [getAllCardData, setAllCardData] = useState([]);
  const getAllCards = async () => {
    try {
      const allCard = await axios.get("http://localhost:4000/all");
      setAllCardData(allCard.data.cards);
    } catch (error) {
      console.log(error);
      alert("Card'lar getirilemedi!");
    }
  };
  useEffect(() => {
    getAllCards();
  }, []);

  // DELETE CARD
  const deleteCard = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/delete/${id}`);
      toast.error("Card başarıyla silindi!", { autoClose: 300 });
      await getAllCards();
    } catch (error) {
      console.log("Delete Error : ", error);
      alert("Card silinirken bir hata oluştu!");
    }
  };

  // DETAILS CARD
  const [detailsCardData, setDetailsCardData] = useState({});
  const getDetailsCard = async (id) => {
    try {
      const d = await axios.get(`http://localhost:4000/details/${id}`);
      setDetailsCardData(d.data.card);
    } catch (error) {
      console.log(error);
      alert("Detay getirilirken bir hata oluştu!");
    }
  };

  // CREATE CARD
  const createCard = async (title, content) => {
    await axios.post("http://localhost:4000/create", {
      title,
      content,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("Title cannot be empty!");
      return;
    }
    try {
      await createCard(title, content);
      toast.success("Form submitted successfully!", { autoClose: 3000 });
      setTitle("");
      setContent("");
      await getAllCards();
    } catch (error) {
      console.log("Create error: ", error);
      alert("Veritabanına bağlanırken bir hata oluştu!");
    }
  };

  // UPDATE CARD
  const [uCard, setUCard] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});
  const updateCard = async (id, title, content) => {
    await axios.put(`http://localhost:4000/update/${id}`, {
      title: title,
      content: content,
    });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (title.trim() === 0) {
      alert("Title cannot to empty!");
      return;
    }

    try {
      await updateCard(
        selectedCard._id,
        selectedCard.title,
        selectedCard.content
      );
      toast.success("Card başarıyla güncellendi!", { autoClose: 3000 });
      await getAllCards();
      setUCard(!uCard);
    } catch (error) {
      console.log("Update error: ", error);
      alert("Veritabanına bağlanırken bir hata oluştu!");
    }
  };

  return (
    <div className="inline-flex w-[400px] flex-col bg-gradient-to-l from-sky-600 to-purple-700 border py-4 px-6 items-center mt-4 rounded-xl gap-4">
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
      <CardsContainer
        det={det}
        setDet={setDet}
        getAllCardData={getAllCardData}
        deleteCard={deleteCard}
        getDetailsCard={getDetailsCard}
        detailsCardData={detailsCardData}
        uCard={uCard}
        setUCard={setUCard}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
      {det ? (
        <DetailsCard
          setDet={setDet}
          det={det}
          detailsCardData={detailsCardData}
        />
      ) : (
        <></>
      )}
      {uCard ? (
        <UpdateCardContainer
          uCard={uCard}
          setUCard={setUCard}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          handleUpdate={handleUpdate}
        />
      ) : (
        <></>
      )}
      <ToastContainer />
    </div>
  );
};

export default BigContainer;
