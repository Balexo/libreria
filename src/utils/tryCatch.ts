import { Request, Response, NextFunction } from "express";

type AssyncMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<any>;

export const tryCatch =
  (fn: AssyncMiddleware) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
