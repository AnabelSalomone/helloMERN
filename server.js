const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

const items = require('./routes/api/items')
mongoose.connect(
  process.env.DB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => console.log("connected", err)
)

app.use("/api/items", items)

app.listen(port, () => console.log("Listening to port 5000"));

