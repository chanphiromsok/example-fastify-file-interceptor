/// <reference types="multer" />
import { AppService } from './app.service';
import { MultipleFileDto, SingleFileDto, AnyFileDto, FieldsFileDto } from './dto/re-export-dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    single(file: Express.Multer.File, body: SingleFileDto): {
        photo_url: Express.Multer.File;
        username: string;
        password: string;
    };
    multiple(files: Express.Multer.File[], body: MultipleFileDto): {
        photo_url: Express.Multer.File[];
        username: string;
        password: string;
    };
    anyFile(files: Express.Multer.File, body: AnyFileDto): {
        photo_url: Express.Multer.File;
        username: string;
        password: string;
    };
    fields({ photo_url, images }: {
        photo_url: any;
        images: any;
    }, body: FieldsFileDto): {
        photo_url: any;
        images: any;
        username: string;
        password: string;
    };
}
