import { Router } from "express";
import { signup, getUser } from "../controllers/UsersController";

const router = Router();

router.post("/signup", signup);
router.get("/:uid", getUser);

export default router;
