import { NextFunction, Request, Response } from "express";
import { createUserToDB, getBooksByGenre, getBooksByGenreAndPublisher, getBooksFromDB, getUserByIdFromDB, } from "./book.service";
import Books from "./book.model";


export const getBooks = async (
    reg: Request,
    res: Response,
    next: NextFunction) => {
    const book = await getBooksFromDB();
    res.status(200).json({
        status: "success",
        data: book,
    });

}


// Task 2: Implement a MongoDB query to find all books in the "Books" collection with a specific genre, such as "Fantasy"
// http://localhost:4000/api/v1/books/Fantasy
export const booksByGenre = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    const { genre } = req.params;
    const books = await getBooksByGenre(genre);
    console.log("Genre", genre)

    res.status(200).json({
        status: "success",
        data: books,
    });
};

export const booksByGenreAndPublisher = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    const { genre } = req.params;
    const books = await getBooksByGenreAndPublisher(genre);
    console.log("Genre", genre)

    res.status(200).json({
        status: "success",
        data: books,
    });
};


export async function findBooksByGenreAndPublisher(req, res) {
    const genre = req.query.genre;
    const publisher = req.query.publisher;

    try {
        const books = await Books.find({ genre: genre, "publisher.name": publisher });
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}