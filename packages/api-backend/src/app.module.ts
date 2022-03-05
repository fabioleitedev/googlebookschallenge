import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BookControllerController } from './controllers/book-controller/book.controller';
import { BookService } from './services/book-service/book.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [BookControllerController],
  providers: [BookService],
})
export class AppModule {}
