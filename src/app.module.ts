import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { diskStorage, FastifyMulterModule } from 'fastify-file-interceptor';
import { editFileName } from './utils/file-upload-util';

@Module({
  imports: [
    FastifyMulterModule.register({
      storage: diskStorage({
        destination: './upload/any',
        filename: editFileName,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
