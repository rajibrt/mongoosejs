import { Book } from "./book.interface";
import User from "./book.model";
import Books from "./book.model"

export const createUserToDB = async (payload: Book): Promise<Book> => {
    // creating a new user
    const user = new User(payload) //User -> class user -> instance
    await user.save(); // builtin instance -> methods | we will make custom instance methods
    console.log(user.fullName());
    return user;
};

export const getBooksFromDB = async (): Promise<Book[]> => {
    const books = await Books.find()
    return books;
}

// Task 2: Implement a MongoDB query to find all books in the "Books" collection with a specific genre, such as "Fantasy"
export const getBooksByGenre = async (payload: string): Promise<Book | null> => {
    const booksBuyGenre = await Books.findOne({ genre: payload })
    return booksBuyGenre;
}


// export const getBooksByGenreAndPublisher = async (payload: string): Promise<Book | null> => {
//     const booksByGenreAndPublisher = await Books.aggregate([{$match: {genre: payload, publisher: payload} }])
//     return booksByGenreAndPublisher;
// }


export const getBooksByGenreAndPublisher = async (payload: string): Promise<Book[]> => {
    const booksByGenreAndPublisher = await Books.aggregate([
        {
            $match: {
                genre: payload,
                "publisher.name": { $ne: payload } // Exclude books with the same publisher as the payload
            }
        }
    ]);
    return booksByGenreAndPublisher;
}


export const getUserByIdFromDB = async (payload: string): Promise<Book | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 })
    return user;
}


