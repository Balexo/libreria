import { Router } from "express";
import {
  getAllBooks,
  addNewBook,
  updateBookDetails,
  deleteABook,
  getBook,
} from "../controllers/BooksController";
import { verifyAuthToken } from "../middleware/auth";

const router = Router();

router.get("/", getAllBooks);
router.get("/:id", getBook);
router.post("/", verifyAuthToken, addNewBook);
router.post("/updatebook/:id", verifyAuthToken, updateBookDetails);
router.post("/deletebook/:id", verifyAuthToken, deleteABook);

export default router;
