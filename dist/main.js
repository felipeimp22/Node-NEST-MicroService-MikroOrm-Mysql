"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const migrate_1 = require("./migrate");
const swagger_1 = require("./swagger");
require('dotenv').config({
    path: `${__dirname}/../../.env`
});
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await (0, swagger_1.default)(app);
    await (0, migrate_1.default)();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map