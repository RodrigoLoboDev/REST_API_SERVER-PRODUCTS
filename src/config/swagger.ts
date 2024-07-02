import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API Node.js | Express | TypeScript',
            version: '1.0.0',
            description: 'API Doc for Products'
        }
    },
    apis: ['./src/router.ts']
}

export const swaggerSpec = swaggerJSDoc(options)

export const swaggerUiOptions : SwaggerUiOptions = {
    customCss: `
        .topbar-wrapper .link {
            content: url('https://portafolio-rodrigo-lobo-dev.vercel.app/_next/image?url=%2Fimg%2F2-transparente.png&w=256&q=75');
            height: 120px
        }

        .swagger-ui .topbar {
            background-color: #e2e1e1
        }
    `,
    customSiteTitle: 'Documentación REST API'
} 