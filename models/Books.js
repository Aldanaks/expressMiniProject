const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  Author: { type: String, required: true },
  price: { type: Number, default: 5 },
  image: { type: String, default: "link" },
});

module.exports = mongoose.model("books", booksSchema);
