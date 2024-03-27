import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books, User,BorrowedBook } from 'src/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Books,User,BorrowedBook])
  ],
  controllers: [BookController],
  providers: [BookService],
  exports:[BookService]
})
export class BookModule {}
