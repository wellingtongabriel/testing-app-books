import { Component, OnInit } from "@angular/core";
import { Book } from "../models/interfaces/book.model";
import { BookService } from "../services/book.service";

@Component({
  selector: 'ioa-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {

  books: Array<Book>;

  constructor(private bookService: BookService) {
    this.books = [];
  }
  
  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks(): void {
    this.bookService
      .getUsers()
      .subscribe(response => this.books = response.data)
  }
}