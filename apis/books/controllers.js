const Book = require("../../models/Books");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.json(books);
  } catch (error) {
    return next(error);
  }
};

const getOneBook = async (req, res, next) => {
  try {
    const id = req.params.id;

    const book = await Book.findById(id);
    if (book) {
      return res.status(200).json(book);
    } else {
      return res.status(400).json({ msg: "Book with this id is not found!" });
    }
  } catch (error) {
    return next(error);
  }
};

const createOneBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const book = await Book.create(req.body);
    if (book) {
      return res.status(201).json(book);
    } else {
      return res.status(404).json({ msg: "create book failed!" });
    }
  } catch (error) {
    return next(error);
  }
};

const updateOneBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (book) {
      return res.status(201).json(book);
    } else {
      return res.status(404).json({ msg: "update book failed!" });
    }
  } catch (error) {
    return next(error);
  }
};

const deleteOneBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const book = await Book.findByIdAndDelete(id, req.body);
    if (book) {
      return res.status(201).json(book);
    } else {
      return res.status(404).json({ msg: "delete book failed!" });
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllBooks,
  getOneBook,
  createOneBook,
  deleteOneBook,
  updateOneBook,
};
