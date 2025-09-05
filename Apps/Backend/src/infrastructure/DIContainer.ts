import { InMemoryBookRepository } from "./repositories/inMemoryBookRepository";
import { GetAllBooks } from "../use-cases/getAllBooks"
import { MongoBookRepository } from "./repositories/MongooBookRepository";

class DIContainer{
    private static _bookRepository = new MongoBookRepository();

    static getBookRepository() {
        return this._bookRepository;
    }

    static getGetAllBooksUseCase() {
        return new GetAllBooks(this.getBookRepository());
    }
}

export  {DIContainer} 