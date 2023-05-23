import { HydratedDocument, Model } from "mongoose";

export interface Book {
    title: string;
    author: string[];
    genre: string;
    publicationYear: number;
    publisher: {
        name: string;
        location: string;
    };
    reviews: {
        user: string;
        comment: string;
    }[];
    rating: number;
    price: string;
}


// instance methods
// Put all user instance methods in this interface:
export interface BookMethods {
    fullName(): string;
}
// statics methods

export interface BookModel extends Model<Book, {}, BookMethods> {
    getBooks(): Promise<HydratedDocument<Book, BookMethods>>;
}
