import { Request, Response } from "express";
import { GetAllBooks} from "../../use-cases/getAllBooks";
import { DIContainer } from "../../infrastructure/DIContainer";

export class BookController {
    private getAllBooks = DIContainer.getGetAllBooksUseCase();

    async getAll(req: Request, res: Response) {
        const books = await this.getAllBooks.execute();
        res.json(books);
    }
}