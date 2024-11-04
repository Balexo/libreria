import dotenv from "dotenv";
dotenv.config();
import "./firebase";
import express, { Application } from "express";
import morgan from "morgan";
import path from "path";
import books from "./routes/books";

const app: Application = express();

console.log("app impreso correctamente");

//settings
app.set("port", process.env.PORT || 4001);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/api/books", books);

//statics files
app.use(express.static(path.join(__dirname, "public")));

export default app;
