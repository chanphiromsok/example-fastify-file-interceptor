/// <reference types="multer" />
import { FastifyRequest } from 'fastify';
interface FileMapper {
    file: Express.Multer.File;
    req: FastifyRequest;
}
interface FilesMapper {
    files: Express.Multer.File[];
    req: FastifyRequest;
}
export declare const fileMapper: ({ file, req }: FileMapper) => {
    originalname: string;
    filename: string;
    image_url: string;
};
export declare const filesMapper: ({ files, req }: FilesMapper) => {
    originalname: string;
    filename: string;
    image_url: string;
}[];
export {};
