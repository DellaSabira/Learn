import { Router } from "express"
import { InMemoryBookRepository } from "../../infrastructure/repositories/inMemoryBookRepository"
import { GetAllBooks } from "../../use-cases/getAllBooks"
import { BookController } from "../controllers/BookController"

const router = Router();

const bookRepository = new InMemoryBookRepository();
const getAllBooks = new GetAllBooks(bookRepository);
const bookController = new BookController();

router.get("/books", (req, res) => bookController.getAll(req, res));

export { router as bookRoutes }; 