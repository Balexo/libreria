import { Router } from "express";
import { getAllBooks } from "../controllers/BooksController";

const router = Router();

router.get("/", getAllBooks);

export default router;
