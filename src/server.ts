import express from "express";
import cors, { CorsOptions } from "cors";
import { router } from "./router";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec, swaggerUiOptions } from "./config/swagger";
import { conectarDB } from "./config/db";

conectarDB()

// Instancia de express
export const server = express()

// Permitir Conexiones
const corsOptions : CorsOptions = {
    origin: function(origin, callback) {
        // console.log(origin);
        if (origin == `${process.env.FRONTEND_URL}`) {
            callback(null, true)
        } else {
            callback(new Error('Error de CORS'))
        }
    }
}
server.use(cors(corsOptions))

// Leer datos del formulario
server.use(express.json())

// Routing
server.use('/api/products', router)


// Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))