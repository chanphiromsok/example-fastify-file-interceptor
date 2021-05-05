/// <reference types="express-serve-static-core" />
/// <reference types="multer" />
import { Request } from 'express';
import { FileFilterCallback } from 'fastify-multer/lib/interfaces';
export declare const editFileName: (req: Request, file: Express.Multer.File, callback: any) => void;
export declare const imageFileFilter: (req: Request, file: Express.Multer.File, callback: FileFilterCallback) => void;
