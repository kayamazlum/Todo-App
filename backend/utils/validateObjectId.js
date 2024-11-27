const mongoose = require("mongoose");

const validateObjectId = async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Geçersiz ID !" });
  }
  next();
};

module.exports = validateObjectId;
