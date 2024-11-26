const express = require("express");
const {
  allCard,
  createCard,
  deleteCard,
  detailCards,
  updateCard,
} = require("../controllers/card");

const router = express.Router();

router.get("/all", allCard);
router.get("/detail/:id", detailCards);
router.post("/create", createCard);
router.put("/update/:id", updateCard);
router.delete("/delete/:id", deleteCard);

module.exports = router;
