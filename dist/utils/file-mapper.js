"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filesMapper = exports.fileMapper = void 0;
const fileMapper = ({ file, req }) => {
    const image_url = `${req.protocol}://${req.headers.host}/${file.path}`;
    return {
        originalname: file.originalname,
        filename: file.filename,
        image_url,
    };
};
exports.fileMapper = fileMapper;
const filesMapper = ({ files, req }) => {
    return files.map((file) => {
        const image_url = `${req.protocol}://${req.headers.host}/${file.path}`;
        return {
            originalname: file.originalname,
            filename: file.filename,
            image_url,
        };
    });
};
exports.filesMapper = filesMapper;
//# sourceMappingURL=file-mapper.js.map