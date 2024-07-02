import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'

// para acceder a las variables de entorno con: process.env
dotenv.config()

export const db = new Sequelize(process.env.DATABASE_URL, {
    models: [__dirname + '/../models/**/*'],
    logging: false
})

export async function conectarDB () {
    try {
        await db.authenticate()
        db.sync()
    } catch (error) {
        console.log(`Hubo un error en la conexión con la DB`);
    }
}