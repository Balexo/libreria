import { Router } from "express";
import {
  getAllBooks,
  addNewBook,
  updateBookDetails,
} from "../controllers/BooksController";
import { verifyAuthToken } from "../middleware/auth";

const router = Router();

router.get("/", getAllBooks);
router.post("/newbook", verifyAuthToken, addNewBook);
router.post("/updatebook/:id", verifyAuthToken, updateBookDetails);

export default router;
