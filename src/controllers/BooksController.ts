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

export const addNewBook = tryCatch(async (req: Request, res: Response) => {
  const {
    ownerId,
    title,
    author,
    publication_year,
    isbn,
    publisher,
    genre,
    language,
    number_of_pages,
    description,
    cover_image,
  } = req.body;

  if (
    !ownerId ||
    !title ||
    !author ||
    !publication_year ||
    !isbn ||
    !publisher ||
    !genre ||
    !language
  ) {
    return res
      .status(400)
      .json({ message: "Falta información por añadir sobre el libre" });
  }
  await addBook(req.body);
  res.status(200).json("Nuevo libro añadido.");
});
