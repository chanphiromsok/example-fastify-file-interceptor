import { NestInterceptor, Type } from '@nestjs/common';
import { Options } from 'multer';
export declare function FastifyFilesInterceptor(fieldName: string, maxCount?: number, localOptions?: Options): Type<NestInterceptor>;
