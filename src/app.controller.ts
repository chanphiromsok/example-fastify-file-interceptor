import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { AppService } from './app.service';
import {
  MultipleFileDto,
  SingleFileDto,
  AnyFileDto,
  FieldsFileDto,
} from './dto/re-export-dto';
import { editFileName, imageFileFilter } from './utils/file-upload-util';
import {
  AnyFilesFastifyInterceptor,
  FileFastifyInterceptor,
  FileFieldsFastifyInterceptor,
  FilesFastifyInterceptor,
} from 'fastify-file-interceptor';

@Controller()
@ApiTags('Upload File ')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiConsumes('multipart/form-data')
  @Post('single-file')
  @UseInterceptors(
    FileFastifyInterceptor('photo_url', {
      storage: diskStorage({
        destination: './upload/single',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  single(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: SingleFileDto,
  ) {
    console.log({ ...body, photo_url: file });
    return { ...body, photo_url: file };
  }

  @ApiConsumes('multipart/form-data')
  @Post('multiple-file')
  @UseInterceptors(
    FilesFastifyInterceptor('photo_url', 10, {
      storage: diskStorage({
        destination: './upload/multiple',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  multiple(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() body: MultipleFileDto,
  ) {
    console.log({ ...body, photo_url: files });
    return { ...body, photo_url: files };
  }

  @ApiConsumes('multipart/form-data')
  @Post('any-file')
  @UseInterceptors(
    AnyFilesFastifyInterceptor({
      storage: diskStorage({
        destination: './upload/any',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  anyFile(
    @UploadedFiles() files: Express.Multer.File,
    @Body() body: AnyFileDto,
  ) {
    console.log({ ...body, photo_url: files });
    return { ...body, photo_url: files };
  }

  @ApiConsumes('multipart/form-data')
  @Post('fields-file')
  @UseInterceptors(
    FileFieldsFastifyInterceptor(
      [
        {
          name: 'photo_url',
          maxCount: 10,
        },
        {
          name: 'images',
          maxCount: 10,
        },
      ],
      {
        storage: diskStorage({
          destination: './upload/fields',
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
      },
    ),
  )
  fields(@UploadedFiles() { photo_url, images }, @Body() body: FieldsFileDto) {
    console.log({ ...body, photo_url, images });
    return { ...body, photo_url, images };
  }
}
