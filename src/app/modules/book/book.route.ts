import express from "express";
import { booksByGenre, findBooksByGenreAndPublisher, getBooks } from "./book.controller";
import { getBooksFromDB } from "./book.service";
const router = express.Router();

// Task 2: Implement a MongoDB query to find all books in the "Books" collection with a specific genre, such as "Fantasy"
router.get('/books', getBooks)

router.get('/', getBooksFromDB)

router.get('/book', findBooksByGenreAndPublisher)
router.get('/:genre', booksByGenre)

export default router;