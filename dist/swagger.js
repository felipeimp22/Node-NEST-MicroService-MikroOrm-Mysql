"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const fs = require('fs');
const appDeclaration = require('../package.json');
exports.default = async (app) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle(appDeclaration.displayName)
        .setDescription(appDeclaration.description)
        .setVersion(appDeclaration.apiVersion)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    fs.writeFile('api.json', JSON.stringify(document, null, 2), err => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('api.json generated successfully');
        }
    });
    app.getHttpAdapter().get('/api/json', function (req, res) {
        res.json(document);
    });
    return document;
};
//# sourceMappingURL=swagger.js.map