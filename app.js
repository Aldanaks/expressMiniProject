//new version:  import express from 'express'
// old version:
const express = require("express");
const connectDB = require("./database");
const morgan = require("morgan");
const cors = require("cors");
const notFound = require("./middlewares/notFoundHandler");
const errorHandler = require("./middlewares/errorHandler");
const path = require("path");
const app = express();
const BooksRouter = require("./apis/books/routes");

app.use(express.json());

app.use(morgan("dev"));
app.use(cors());

app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/books", BooksRouter);

app.use(notFound);
app.use(errorHandler);

connectDB();

app.listen(8001, () => {
  console.log("i am running on port 8001");
});
