import { Book } from "../entities/Books";

export interface BookRepository {
  findAll(): Promise<Book[]>;
  findById(id: string): Promise<Book | null>;
  create(book: Book): Promise<Book>;
  update(book: Book): Promise<void>;
  delete(id: string): Promise<void>;
}
