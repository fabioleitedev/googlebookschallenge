import { Controller, Get, HttpCode, Param, Query, Req } from '@nestjs/common';
import { query, Request } from 'express';
import { BookService } from 'src/services/book-service/book.service';

@Controller('books/v1')
export class BookControllerController {
  constructor(private bookService: BookService) {}

  @Get('/')
  @HttpCode(200)
  async check() {
    return '/books/v1 is alive.';
  }

  @Get('/volumes')
  @HttpCode(200)
  async getBooks(@Query('page') page: number, @Query('q') q: string, @Query('stars') stars: number) {
    const response = await this.bookService.getBooksPerPage(page, q);
    return response;
  }

  @Get('/volumes/ratings')
  @HttpCode(200)
  async getBooksByRating(@Query('page') page: number, @Query('q') q: string, @Query('stars') stars: number) {
    const response = await this.bookService.getBooksPerRating(page, q, stars);
    return response;
  }
}
