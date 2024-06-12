const express = require("express");
const {
  getAllBooks,
  getOneBook,
  createOneBook,
  updateOneBook,
  deleteOneBook,
} = require("./controllers");
const upload = require("../../middlewares/multer");

const BooksRouter = express.Router();

BooksRouter.get("/", getAllBooks);
BooksRouter.get("/:id", getOneBook);
BooksRouter.post("/", upload.single("image"), createOneBook);
BooksRouter.post("/", updateOneBook);
BooksRouter.delete("/", deleteOneBook);

module.exports = BooksRouter;
