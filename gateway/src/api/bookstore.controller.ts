import { Body, Controller, Get, Inject, Param, Post, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthGuard } from '@nestjs/passport';

import { BookDTO } from '../dto/book';

@Controller('booksstore')
export class BookController {
  constructor(@Inject('BOOKS_SERVICE') private client: ClientProxy) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAllBooks() {
    return this.client.send({cmd: 'get_books'}, {})
  }

  @Get(':id')
  getBookByID(@Param('id') id ) {
    return this.client.send({cmd: 'get_book'}, id)
  }

  @Post()
  createNewBook(@Body() book: BookDTO) {
    return this.client.send({cmd: 'new_book'}, book)
  }
}