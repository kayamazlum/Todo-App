const Card = require("../models/card");

const allCard = async (req, res) => {
  const cards = await Card.find();
  if (!cards) {
    res.status(404).json({
      message: "Card lar bulunamadı!",
    });
  }
  res.status(200).json({
    cards,
  });
};

const detailCards = async (req, res) => {
  const card = await Card.findById(req.params.id);
  if (!card) {
    res.status(404).json({
      message: "Card bulunamadı!",
    });
  }
  res.status(200).json({
    card,
  });
};

const createCard = async (req, res) => {
  const card = await Card.create(req.body);
  if (!card) {
    res.status(404).json({
      message: "Card bulunamadı!",
    });
  }
  res.status(201).json({
    card,
  });
};

const deleteCard = async (req, res) => {
  const card = await Card.findById(req.params.id);
  if (!card) {
    res.status(404).json({
      message: "Card bulunamadı!",
    });
  }
  await card.remove();
  res.status(200).json({
    message: "Card başarıyla silindi.",
  });
};

const updateCard = async (req, res) => {
  let card = await Card.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    message: "Card başarıyla güncellendi.",
  });
  if (!card) {
    return res.status(404).json({
      message: "Card bulunamadı!",
    });
  }
};

module.exports = { allCard, detailCards, createCard, deleteCard, updateCard };
