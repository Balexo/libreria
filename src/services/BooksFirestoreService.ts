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

export const addBook = async (bookData: Book): Promise<void> => {
  const bookRef = firestore.collection(booksCollection);
  await bookRef.add(bookData);
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
