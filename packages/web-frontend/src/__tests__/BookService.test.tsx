import React from "react";
import { BookService } from "../services/BookService";

let service: BookService;

beforeAll(() => {
  service = new BookService();
});

it("should return the first 4 books.", async () => {
  const books = await service.getBooksPerPage(1);
  expect(books.totalOfVolumes).toBeGreaterThan(0);
  expect(books.volumes).not.toBeNull();
  expect(books.volumes.length).toBe(4);
});

it("should return the second page of 4 books.", async () => {
  const books = await service.getBooksPerPage(2);
  expect(books.totalOfVolumes).toBeGreaterThan(4);
  expect(books.volumes).not.toBeNull();
  expect(books.volumes.length).toBe(4);
});
