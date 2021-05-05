import { NestInterceptor, Type } from '@nestjs/common';
import { Options } from 'multer';
export declare function FastifyAnyFileInterceptor(localOptions: Options): Type<NestInterceptor>;
