"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const app_module_1 = require("./app.module");
const fastify_file_interceptor_1 = require("fastify-file-interceptor");
require("reflect-metadata");
const path_1 = require("path");
const fastify_helmet_1 = require("fastify-helmet");
const swagger_1 = require("@nestjs/swagger");
const swaggerDocument = new swagger_1.DocumentBuilder()
    .setTitle('API')
    .setDescription('API')
    .setVersion('1.0')
    .addTag('API')
    .build();
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
        yield app.listen(3000);
        app.register(fastify_helmet_1.default, {
            contentSecurityPolicy: {
                directives: {
                    defaultSrc: [`'self'`],
                    styleSrc: [`'self'`, `'unsafe-inline'`],
                    imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
                    scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
                },
            },
        });
        app.register(fastify_file_interceptor_1.contentParser);
        app.useStaticAssets({ root: path_1.join(__dirname, '../../example') });
        swagger_1.SwaggerModule.setup('api', app, swagger_1.SwaggerModule.createDocument(app, swaggerDocument));
        console.log(`APP IS RUNNING ON PORT ${yield app.getUrl()}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map