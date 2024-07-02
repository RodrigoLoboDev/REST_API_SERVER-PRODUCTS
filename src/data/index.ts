import { exit } from 'node:process'
import { db } from '../config/db';

// exit - para que finalize el programa
// 1 - finaliza con errores
// 0 o nada - finaliza bien

const clearDB = async () => {
    try {
        await db.sync({force: true})
        console.log('Datos eliminados correctamente...');
        exit()
    } catch (error) {
        console.log(error);
        exit(1)
    }
}

// process - es un comando que se ejecuta en la consola de node
if (process.argv[2] === '--clear') {
    clearDB()
}