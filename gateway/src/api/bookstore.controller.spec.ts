import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './bookstore.controller';
import { AppService } from '../app.service';

describe('AppController', () => {
  let apiController: BookController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [AppService],
    }).compile();

    apiController = app.get<BookController>(BookController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(apiController.getBookByID(1)).toBe('Hello World');
    });
  });
});
