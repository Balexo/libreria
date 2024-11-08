require("dotenv").config();
import readlineSync from "readline-sync";
import users from "./usersDB";
import books from "./booksDB";
import { db } from "../firebase";

async function initializeDB() {
  const answer = readlineSync.question(
    "¿Desear inicializar la base de datos y borrar todos los datos existentes?(s/n)",
  );

  if (answer.toLowerCase() !== "s") {
    console.log("Inicialización cancelada");
    return;
  }

  const booksCollections = db.collection("books");
  const usersCollections = db.collection("users");

  const deleteAllBooks = async () => {
    const snapshotBooks = await booksCollections.get();
    const batchBooks = db.batch();
    snapshotBooks.forEach((item) => {
      batchBooks.delete(item.ref);
    });
    await batchBooks.commit();
    console.log("Libros borrados");
  };
  const addNewBooks = async () => {
    for (const book of books) {
      await booksCollections.doc(book.id).set(book);
      console.log(`El libro ${book.title} ha sido añadido a la base de datos`);
    }
  };

  const deleteAllUsers = async () => {
    const snapshotUsers = await usersCollections.get();
    const batchUsers = db.batch();
    snapshotUsers.forEach((item) => {
      batchUsers.delete(item.ref);
    });
    await batchUsers.commit();
    console.log("Usuarios borrados");
  };

  const addNewUsers = async () => {
    for (const user of users) {
      await usersCollections.doc(user.uid).set(user);
      console.log(
        `El usuario ${user.username} ha sido añadido a la base de datos`,
      );
    }
  };

  try {
    await deleteAllBooks();
    await addNewBooks();
    await deleteAllUsers();
    await addNewUsers();
    console.log("Base de datos actualizada con libros y usuarios");
  } catch (error) {
    console.log("Error al iniciar la base de datos");
  }
}

initializeDB();
