import { Books } from "./Books";

export interface BookServiceResponse {
  success: boolean;
  data: Books;
  errorDetails?: string;
}
