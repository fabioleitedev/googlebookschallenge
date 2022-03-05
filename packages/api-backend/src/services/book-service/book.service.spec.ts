import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';

describe('BookServiceService', () => {
  let service: BookService;
  const GOOGLE_BOOKS_URL = 'https://www.googleapis.com/books/v1/volumes';
  const MAX_RESULTS = '4';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [BookService],
    }).compile();

    service = module.get<BookService>(BookService);

    process.env.GOOGLE_BOOKS_URL = GOOGLE_BOOKS_URL;
    process.env.MAX_RESULTS = MAX_RESULTS;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it("should return the first books for searching by 'google'.", async () => {
    const response = await service.getBooksPerPage(0, 'google');
    expect(response.success).toBeTruthy();
    expect(response.data).not.toBeNull();
    expect(response.data.totalOfVolumes).toBeGreaterThan(0);
    expect(response.data.volumes.length).toBeGreaterThan(0);
  });

  it("should return the first books for searching by 'a' with greater than 2 stars.", async () => {
    const response = await service.getBooksPerRating(0, 'google', 2);
    expect(response.success).toBeTruthy();
    expect(response.data).not.toBeNull();
    expect(response.data.totalOfVolumes).toBeGreaterThan(0);
    expect(response.data.volumes.length).toBeGreaterThan(0);
  });
});
