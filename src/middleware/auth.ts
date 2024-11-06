/// <reference path="../../types.d.ts" />
import { Request, Response, NextFunction } from "express";
import { auth } from "firebase-admin";

export const verifyAuthToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader || !authorizationHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authorizationHeader.split("Bearer ")[1].trim();

  try {
    const tokenValidation = await auth().verifyIdToken(token);
    req.user = tokenValidation;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
