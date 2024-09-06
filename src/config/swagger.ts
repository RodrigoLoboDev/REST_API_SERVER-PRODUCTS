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
        
        .topbar-wrapper {
            justify-content: center; /* Centra la imagen horizontalmente */
            width: 100%; /* El contenedor ocupará todo el ancho */
            height: 120px; /* Altura del contenedor */
        }

        .topbar-wrapper .link {
            width: 100%; /* El enlace ocupará todo el ancho del contenedor */
            height: 100%; /* El enlace ocupará toda la altura del contenedor */
            position: relative; /* Posicionamiento relativo para pseudo-elementos */
        }

        .topbar-wrapper .link::before {
            content: ''; /* Inserta el pseudo-elemento */
            display: block; /* Asegura que se muestre como bloque */
            background-image: url('https://i.imgur.com/srrprg5.png'); /* URL de la imagen */
            background-size: cover; /* La imagen cubrirá todo el ancho del contenedor */
            background-repeat: no-repeat; /* No repetirá la imagen */
            background-position: center; /* Centra la imagen */
            width: 100%; /* La imagen ocupará todo el ancho del contenedor */
            height: 100%; /* La imagen ocupará todo el alto del contenedor */
            position: absolute; /* Posicionamiento absoluto para que cubra todo el contenedor */
            top: 0;
            left: 0;
        }

        .swagger-ui .topbar a {
            max-width: 1000px;
        }

    `,
    customSiteTitle: 'Documentación REST API'
} 

