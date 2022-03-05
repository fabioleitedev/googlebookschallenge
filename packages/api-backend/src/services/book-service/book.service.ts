import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { BookServiceResponse } from '../../../../shared/model/BookServiceResponse';
import { Volume } from '../../../../shared/model/Volume';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class BookService {
  constructor(private httpService: HttpService) {}

  public async getBooksPerPage(page: number, query: String) {
    const startIndex = page * 5;

    const requestURL = `${process.env.GOOGLE_BOOKS_URL}?startIndex=${startIndex}&maxResults=${process.env.MAX_RESULTS}&q=${query}`;

    try {
      const googleResponse = await firstValueFrom(this.httpService.get(requestURL));
      const volumes: Volume[] = [];

      if (!googleResponse.data.items || googleResponse.data.items.length === 0) {
        return {
          success: true,
          data: {
            totalOfVolumes: 0,
            volumes: [],
          },
        } as BookServiceResponse;
      }

      let responseData = googleResponse.data;
      const totalItems = responseData.totalItems;

      for (const i of responseData.items) {
        volumes.push({
          title: i.volumeInfo.title,
          description: i.volumeInfo.description,
          publisher: i.volumeInfo.publisher,
          pages: i.volumeInfo.pageCount,
          year: i.volumeInfo.publishedDate,
          imageLink: i.volumeInfo?.imageLinks?.smallThumbnail,
        });
      }

      const ret: BookServiceResponse = {
        success: true,
        data: {
          totalOfVolumes: totalItems,
          volumes: volumes,
        },
      };

      return ret;
    } catch (error) {
      return {
        success: false,
        data: null,
        errorDetails: error,
      } as BookServiceResponse;
    }
  }

  public async getBooksPerRating(page: number, query: String, stars: number) {
    const startIndex = page * 5;

    // getting all books because we don't have a parameter to filter by stars.
    const requestURL = `${process.env.GOOGLE_BOOKS_URL}?q=${query}`;

    try {
      const googleResponse = await firstValueFrom(this.httpService.get(requestURL));
      const volumes: Volume[] = [];

      if (!googleResponse.data.items || googleResponse.data.items.length === 0) {
        return {
          success: true,
          data: {
            totalOfVolumes: 0,
            volumes: [],
          },
        } as BookServiceResponse;
      }

      let responseData = googleResponse.data;

      // filtering stars
      responseData.items = responseData.items.filter((d: any) => d.volumeInfo.averageRating > stars);
      for (let i = 0; i <= 3; i++) {
        if (responseData.items[i]) {
          volumes.push({
            title: responseData.items[i].volumeInfo.title,
            description: responseData.items[i].volumeInfo.description,
            publisher: responseData.items[i].volumeInfo.publisher,
            pages: responseData.items[i].volumeInfo.pageCount,
            year: responseData.items[i].volumeInfo.publishedDate,
            imageLink: responseData.items[i].volumeInfo?.imageLinks?.smallThumbnail,
          });
        }
      }

      const ret: BookServiceResponse = {
        success: true,
        data: {
          totalOfVolumes: responseData.items.length,
          volumes: volumes,
        },
      };

      return ret;
    } catch (error) {
      return {
        success: false,
        data: null,
        errorDetails: error,
      } as BookServiceResponse;
    }
  }
}
