import axios from "axios";
import { BookServiceResponse } from "../../../shared/model/BookServiceResponse";

export class BookService {
  public async getBooksPerPage(page: number, q: String) {
    const pageNumber = page - 1;
    const request = `${process.env.REACT_APP_BACKEND_URL}?page=${pageNumber}&q=${q}`;
    console.log("request ", request);
    try {
      const response = await axios.get<BookServiceResponse>(request);

      if (!response || response.status !== 200) {
        return {
          success: false,
        } as BookServiceResponse;
      }

      return response.data;
    } catch (error) {
      return {
        success: false,
        errorDetails: error,
      } as BookServiceResponse;
    }
  }

  public async getBooksPerRating(page: number, q: String, stars: number) {
    const pageNumber = page - 1;
    const request = `${process.env.REACT_APP_BACKEND_URL_RATING}?page=${pageNumber}&q=${q}&stars=${stars}`;

    try {
      const response = await axios.get<BookServiceResponse>(request);

      if (!response || response.status !== 200) {
        return {
          success: false,
        } as BookServiceResponse;
      }

      return response.data;
    } catch (error) {
      return {
        success: false,
        errorDetails: error,
      } as BookServiceResponse;
    }
  }
}
