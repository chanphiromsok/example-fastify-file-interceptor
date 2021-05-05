"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const multer_1 = require("multer");
const app_service_1 = require("./app.service");
const re_export_dto_1 = require("./dto/re-export-dto");
const file_upload_util_1 = require("./utils/file-upload-util");
const fastify_file_interceptor_1 = require("fastify-file-interceptor");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    single(file, body) {
        console.log(Object.assign(Object.assign({}, body), { photo_url: file }));
        return Object.assign(Object.assign({}, body), { photo_url: file });
    }
    multiple(files, body) {
        console.log(Object.assign(Object.assign({}, body), { photo_url: files }));
        return Object.assign(Object.assign({}, body), { photo_url: files });
    }
    anyFile(files, body) {
        console.log(Object.assign(Object.assign({}, body), { photo_url: files }));
        return Object.assign(Object.assign({}, body), { photo_url: files });
    }
    fields({ photo_url, images }, body) {
        console.log(Object.assign(Object.assign({}, body), { photo_url, images }));
        return Object.assign(Object.assign({}, body), { photo_url, images });
    }
};
__decorate([
    swagger_1.ApiConsumes('multipart/form-data'),
    common_1.Post('single-file'),
    common_1.UseInterceptors(fastify_file_interceptor_1.FileFastifyInterceptor('photo_url', {
        storage: multer_1.diskStorage({
            destination: './upload/single',
            filename: file_upload_util_1.editFileName,
        }),
        fileFilter: file_upload_util_1.imageFileFilter,
    })),
    __param(0, common_1.UploadedFile()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, re_export_dto_1.SingleFileDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "single", null);
__decorate([
    swagger_1.ApiConsumes('multipart/form-data'),
    common_1.Post('multiple-file'),
    common_1.UseInterceptors(fastify_file_interceptor_1.FilesFastifyInterceptor('photo_url', 10, {
        storage: multer_1.diskStorage({
            destination: './upload/multiple',
            filename: file_upload_util_1.editFileName,
        }),
        fileFilter: file_upload_util_1.imageFileFilter,
    })),
    __param(0, common_1.UploadedFiles()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, re_export_dto_1.MultipleFileDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "multiple", null);
__decorate([
    swagger_1.ApiConsumes('multipart/form-data'),
    common_1.Post('any-file'),
    common_1.UseInterceptors(fastify_file_interceptor_1.AnyFilesFastifyInterceptor({
        storage: multer_1.diskStorage({
            destination: './upload/any',
            filename: file_upload_util_1.editFileName,
        }),
        fileFilter: file_upload_util_1.imageFileFilter,
    })),
    __param(0, common_1.UploadedFiles()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, re_export_dto_1.AnyFileDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "anyFile", null);
__decorate([
    swagger_1.ApiConsumes('multipart/form-data'),
    common_1.Post('fields-file'),
    common_1.UseInterceptors(fastify_file_interceptor_1.FileFieldsFastifyInterceptor([
        {
            name: 'photo_url',
            maxCount: 10,
        },
        {
            name: 'images',
            maxCount: 10,
        },
    ], {
        storage: multer_1.diskStorage({
            destination: './upload/fields',
            filename: file_upload_util_1.editFileName,
        }),
        fileFilter: file_upload_util_1.imageFileFilter,
    })),
    __param(0, common_1.UploadedFiles()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, re_export_dto_1.FieldsFileDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "fields", null);
AppController = __decorate([
    common_1.Controller(),
    swagger_1.ApiTags('Upload File '),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map