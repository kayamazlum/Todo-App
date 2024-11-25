const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 5000;

db();

app.listen(PORT, () => {
  console.log("Server is running on port : 4000");
});
