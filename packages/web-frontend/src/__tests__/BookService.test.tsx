import React from "react";
import { BookService } from "../services/BookService";

let service: BookService;

beforeAll(() => {
  service = new BookService();
});

it("should return the first books.", async () => {
  const books = await service.getBooksPerPage(1, "google");
  expect(books.success).toBeTruthy();
  expect(books.data).toBeDefined();
  expect(books.data.totalOfVolumes).toBeGreaterThan(0);
  expect(books.data.volumes.length).toBeGreaterThan(0);
});

it("should return the second page of books.", async () => {
  const books = await service.getBooksPerPage(2, "google");
  expect(books.success).toBeTruthy();
  expect(books.data).toBeDefined();
  expect(books.data.totalOfVolumes).toBeGreaterThan(0);
  expect(books.data.volumes.length).toBeGreaterThan(0);
});

it("should return the first page of books with rating > 2.", async () => {
  const books = await service.getBooksPerRating(1, "google", 2);
  expect(books.success).toBeTruthy();
  expect(books.data).toBeDefined();
  expect(books.data.totalOfVolumes).toBeGreaterThan(0);
  expect(books.data.volumes.length).toBeGreaterThan(0);
});
