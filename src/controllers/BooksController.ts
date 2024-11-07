import { Request, Response } from "express";
import {
  getBooks,
  addBook,
  updatedBook,
  deleteBook,
  getBookById,
} from "../services/BooksFirestoreService";
import { tryCatch } from "../utils/tryCatch";
import { DocumentReference, Timestamp } from "firebase-admin/firestore";
import { Book } from "../initDB/booksDB";

export const getAllBooks = tryCatch(async (req: Request, res: Response) => {
  const books = await getBooks();
  res.status(200).json(books);
});

export const addNewBook = tryCatch(async (req: Request, res: Response) => {
  const {
    title,
    author,
    publication_year,
    isbn,
    publisher,
    genre,
    language,
    number_of_pages = 0,
    description = "",
    cover_image = "",
  } = req.body;

  if (
    !title ||
    !author ||
    !publication_year ||
    !isbn ||
    !publisher ||
    !genre ||
    !language
  ) {
    return res.status(400).json({
      message: "Falta información por añadir sobre el libro",
      type: "error",
      data: {},
    });
  }

  const ownerId = req.user?.uid;
  if (!ownerId) {
    return res
      .status(401)
      .json({ message: "Usuario no registrado", type: "error", data: {} });
  }

  const created_at = Timestamp.fromDate(new Date());
  const updated_at = created_at;

  const newBook: Omit<Book, "id"> = {
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
    created_at,
    updated_at,
  };

  const docRef: DocumentReference = await addBook(newBook);
  const bookId = docRef.id;

  res.status(200).json({
    message: "Nuevo libro añadido.",
    type: "success",
    data: { id: bookId, ...newBook },
  });
});

export const updateBookDetails = tryCatch(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const {
      title,
      author,
      publication_year,
      isbn,
      publisher,
      genre,
      language,
      number_of_pages = 0,
      description = "",
      cover_image = "",
    } = req.body;

    if (!id) {
      res
        .status(400)
        .json({ messge: "Falta ID del libro", type: "error", data: {} });
    }

    const bookExists = await getBookById(id);

    if (!bookExists) {
      res
        .status(404)
        .json({ message: "Libro no encontrado", type: "error", data: {} });
    }
    if (
      !title &&
      !author &&
      !publication_year &&
      !isbn &&
      !publisher &&
      !genre &&
      !language &&
      !number_of_pages &&
      !description &&
      !cover_image
    ) {
      res.status(400).json({
        message: "Faltan datos sobre el libro",
        type: "error",
        data: {},
      });
    }

    const ownerId = req.user?.uid;

    if (bookExists?.ownerId !== ownerId) {
      res.status(404).json({
        message: "Solo el propietario del libro puede editarlo",
        type: "error",
        data: {},
      });
    }

    const updated_at = Timestamp.fromDate(new Date());

    const updatedBookData: Partial<Book> = {
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
      updated_at,
    };

    await updatedBook(id, updatedBookData);
    res.status(200).json({
      message: "Libro encontrado",
      type: "success",
      data: updatedBookData,
    });
  },
);

export const deleteABook = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .json({ message: "Falta ID del libro", type: "error", data: {} });
  }

  const book = await getBookById(id);
  if (!book) {
    return res
      .status(404)
      .json({ message: "Libro no encontrado", type: "error", data: {} });
  }

  const ownerId = req.user?.uid;

  if (book.ownerId !== ownerId) {
    return res.status(404).json({
      message: "Solo el propietario del libro puede borrarlo",
      type: "error",
      data: {},
    });
  }

  await deleteBook(id);
  res.status(200).json({
    message: "Libro borrado correctamente",
    type: "success",
    data: {},
  });
});

export const getBook = tryCatch(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(404).json({
      message: "No existe un libro con este ID",
      type: "error",
      data: {},
    });
  }

  const book = await getBookById(id);
  res.status(200).json({
    message: "Libro encontrado correctamente",
    type: "success",
    data: { book },
  });
});
