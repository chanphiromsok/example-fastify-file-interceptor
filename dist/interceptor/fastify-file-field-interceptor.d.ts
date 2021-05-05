import { NestInterceptor, Type } from '@nestjs/common';
import { Options } from 'multer';
declare type Fileds = {
    name: string;
    maxCount?: number;
};
export declare function FastifyFileFieldsInterceptor(fields: ReadonlyArray<Fileds>, localOptions: Options): Type<NestInterceptor>;
export {};
