import { InMemoryBookRepository } from "./repositories/inMemoryBookRepository";
import { GetAllBooks } from "../use-cases/getAllBooks"

class DIContainer{
    private static _bookRepository = new InMemoryBookRepository();

    static getBookRepository() {
        return this._bookRepository;
    }

    static getGetAllBooksUseCase() {
        return new GetAllBooks(this.getBookRepository());
    }
}

export  {DIContainer} 