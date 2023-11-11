import { Injectable } from '@nestjs/common';
import { BookDTO } from './dto/book';


let bookStore:BookDTO[] = [{
  id: "Book_1",
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  release_date: new Date("21-09-1937")
}]

@Injectable()
export class AppService {

  getBookByID(bookID: string) {
    return bookStore.find( (b:BookDTO) => b.id == bookID)
  }

  getAllBooks() {
   return bookStore;
  }

  newBook(book: BookDTO) {
  const exists = bookStore.find( (b: BookDTO) => {
    return b.title == book.title &&
          b.author == book.author &&
          b.release_date == book.release_date
  })
  if(exists) return false;
  book.id = "Book_" + (bookStore.length + 1)
  bookStore.push(book)
  return book.id;
  }
}