import { Books } from "../model/Books";

export class BookService {
  public async getBooksPerPage(page: number, query?: String) {
    const response: Books = {
      totalOfVolumes: 100,
      volumes: [
        {
          title: "Book Title",
          pages: 10,
          year: "2000",
          publisher: "Fabio Leite",
          description:
            "Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache.",
        },
        {
          title: "Book Title",
          pages: 10,
          year: "2000",
          publisher: "Fabio Leite",
          description:
            "Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache.",
        },
        {
          title: "Book Title",
          pages: 10,
          year: "2000",
          publisher: "Fabio Leite",
          description:
            "Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache.",
        },
        {
          title: "Book Title",
          pages: 10,
          year: "2000",
          publisher: "Fabio Leite",
          description:
            "Oscar-winning film Charly starring Cliff Robertson and Claire Bloom-a mentally challenged man receives an operation that turns him into a genius...and introduces him to heartache.",
        },
      ],
    };

    return response;
  }
}
