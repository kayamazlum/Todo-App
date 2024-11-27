const express = require("express");
const {
  allCard,
  createCard,
  deleteCard,
  detailCards,
  updateCard,
} = require("../controllers/card");
const validateObjectId = require("../utils/validateObjectId");

const router = express.Router();

router.get("/all", allCard);
router.get("/details/:id", validateObjectId, detailCards);
router.post("/create", createCard);
router.put("/update/:id", validateObjectId, updateCard);
router.delete("/delete/:id", validateObjectId, deleteCard);

module.exports = router;
