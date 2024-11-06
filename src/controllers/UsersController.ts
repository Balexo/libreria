import { Request, Response } from "express";
import {
  getUserById,
  addUser,
  deleteUser,
  updateUser,
} from "../services/UsersFirestoreService";
import { auth } from "firebase-admin";
import { tryCatch } from "../utils/tryCatch";
import { Timestamp } from "firebase-admin/firestore";

export const signup = tryCatch(async (req: Request, res: Response) => {
  const { email, password, username, name = "", surname = "" } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Falta información para poder crear el usuario",
      type: "error",
      data: {},
    });
  }

  const userCreation = await auth().createUser({
    email,
    password,
    displayName: username,
  });

  try {
    await addUser(userCreation.uid, {
      uid: userCreation.uid,
      username,
      name,
      surname,
      email,
      password,
      createdAt: Timestamp.fromDate(new Date()),
      updatedAt: Timestamp.fromDate(new Date()),
    });
    res.status(201).json({
      message: "User registered succesfully",
      type: "success",
      data: { uid: userCreation.uid },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    res.status(500).json({
      message: "Error creating user",
      type: "error",
      data: { error: errorMessage },
    });
  }
});

export const getUser = async (req: Request, res: Response) => {
  const { uid } = req.params;

  if (!uid) {
    return res
      .status(400)
      .json({ message: "ID de usuario es requerido", type: "error", data: {} });
  }

  const user = await getUserById(uid);

  if (!user) {
    return res.status(404).json({
      message: "Usuario con este ID no existe",
      type: "error",
      data: {},
    });
  }

  res
    .status(200)
    .json({ message: "Usuario obtenido", type: "success", data: user });
};
