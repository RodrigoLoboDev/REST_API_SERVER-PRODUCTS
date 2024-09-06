import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'
import colors from 'colors'

// para acceder a las variables de entorno con: process.env
dotenv.config()

export const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'postgres',
    models: [__dirname + '/../models/**/*.ts'],
    logging: false
})

export async function conectarDB () {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.bold.green('Conexión exitosa a la DB'));
    } catch (error) {
        console.log(colors.bold.red(`Hubo un error en la conexión con la DB`));
    }
}