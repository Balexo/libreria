import { Request, Response } from "express";
import {
  getBooks,
  addBook,
  updatedBook,
  deleteBook,
} from "../services/BooksFirestoreService";
import { tryCatch } from "../utils/tryCatch";

export const getAllBooks = tryCatch(async (req: Request, res: Response) => {
  const books = await getBooks();
  res.status(200).json(books);
});
