import { Book } from "../../domain/entities/Books";
import { BookRepository } from "../../domain/interfaces/BookRepository";
import { BookModel, IBook } from "../models/BookModel";

export class MongoBookRepository implements BookRepository {
    private toDomain(bookDoc: IBook): Book {
        return new Book (
            bookDoc.id.toString(), // map _id → id
            bookDoc.title,
            bookDoc.author,
            bookDoc.publishedDate
        );
    }
    async findAll(): Promise<Book[]>{
        return await BookModel.find();
    }

    async findById(id: string): Promise<Book | null> {
        return await BookModel.findById(id);
    }

    async create(book: Book): Promise<Book> {
        const newBook = new BookModel({
            title: book.title,
            author: book.author,
            publishedDate: book.publishedDate,
        });
        await newBook.save();
        return this.toDomain(newBook);
    }

    async update(book: Book): Promise<void> {
    await BookModel.findByIdAndUpdate(book.id, book);
  }

  async delete(id: string): Promise<void> {
    await BookModel.findByIdAndDelete(id);
  }
}