import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

const fs = require('fs')
const appDeclaration = require('../package.json')

export default async app => {
  const config = new DocumentBuilder()
    .setTitle(appDeclaration.displayName)
    .setDescription(appDeclaration.description)
    .setVersion(appDeclaration.apiVersion)
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  fs.writeFile('api.json', JSON.stringify(document, null, 2), err => {
    if (err) {
      console.log(err)
    } else {
      console.log('api.json generated successfully')
    }
  })

  app.getHttpAdapter().get('/api/json', function (req, res) {
    res.json(document)
  })

  return document
}
