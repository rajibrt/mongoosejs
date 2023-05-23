import { Schema, model } from "mongoose";
import { Book, BookModel } from "./book.interface";

import mongoose from 'mongoose';

// Define the book schema
// Task 1: Create a MongoDB model with an interface and schema for a "Book" collection that stores fields like title, author, genre, publication year, rating, price, and nested fields like "publisher" and "reviews". All the fields would be required.
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: [String],
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publicationYear: {
        type: Number,
        required: true
    },
    publisher: {
        name: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        }
    },
    reviews: [
        {
            user: {
                type: String,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    rating: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// Create the book model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

const Books = model<Book, BookModel>("Books", bookSchema);

export default Books;
