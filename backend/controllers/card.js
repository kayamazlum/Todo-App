// const mongoose = require("mongoose");
const Card = require("../models/card");

const allCard = async (req, res) => {
  try {
    const cards = await Card.find();
    if (!cards || !cards.length) {
      return res.status(404).json({
        message: "Card lar bulunamadı!",
      });
    }
    res.status(200).json({
      cards,
    });
  } catch (error) {
    res.status(500).json({
      message: "Bir hata oluştu",
      error: error.message,
    });
  }
};

const detailCards = async (req, res) => {
  try {
    const { id } = req.params;

    const card = await Card.findById(id);
    if (!card) {
      return res.status(404).json({
        message: "Card bulunamadı!",
      });
    }

    res.status(200).json({
      card,
    });
  } catch (error) {
    res.status(500).json({
      message: "Bir hata oluştu",
      error: error.message,
    });
  }
};

const createCard = async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(201).json({
      message: "Card olusturuldu!",
      card,
    });
  } catch (error) {
    res.status(400).json({
      message: "Card oluşturulamadı!",
      error: error,
    });
  }
};

const deleteCard = async (req, res) => {
  const { id } = req.params;

  try {
    // Silinecek kartı bulma
    const card = await Card.findById(id);

    // Kart bulunamadıysa hata döndür
    if (!card) {
      return res.status(404).json({
        message: "Card bulunamadı!",
      });
    }

    // Kartı sil
    await card.deleteOne();

    // Başarı mesajı döndür
    res.status(200).json({
      message: "Card başarıyla silindi.",
    });
  } catch (error) {
    // Genel hata yakalama
    res.status(500).json({
      message: "Card silinirken bir hata oluştu.",
      error: error.message,
    });
  }
};

const updateCard = async (req, res) => {
  const { id } = req.params;

  const card = await Card.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!card) {
    return res.status(404).json({
      message: "Card bulunamadı!",
    });
  }
  res.status(200).json({
    message: "Card başarıyla güncellendi.",
    card,
  });
};

module.exports = { allCard, detailCards, createCard, deleteCard, updateCard };
