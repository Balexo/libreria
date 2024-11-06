import { Firestore } from "@google-cloud/firestore";
import { Book } from "../initDB/booksDB";

const firestore = new Firestore();
const booksCollection = "books";

export const getBooks = async (): Promise<Book[]> => {
  const bookRef = firestore.collection(booksCollection);
  const snapshot = await bookRef.get();
  const data: Book[] = [];

  snapshot.forEach((item) => {
    data.push({ id: item.id, ...item.data() } as unknown as Book);
  });
  return data;
};

export const addBook = async (bookData: Omit<Book, "id">) => {
  const bookRef = await firestore.collection(booksCollection).add(bookData);
  return bookRef;
};

export const deleteBook = async (id: string): Promise<void> => {
  const bookRef = firestore.collection(booksCollection).doc(id);
  await bookRef.delete();
};

export const updatedBook = async (
  id: string,
  bookData: Partial<Book>,
): Promise<void> => {
  const bookRef = firestore.collection(booksCollection).doc(id);
  await bookRef.update(bookData);
};

export const getBookById = async (id: string): Promise<Book | null> => {
  const bookRef = firestore.collection(booksCollection).doc(id);
  const bookById = await bookRef.get();

  if (!bookById.exists) {
    return null;
  }
  return bookById.data() as Book;
};
