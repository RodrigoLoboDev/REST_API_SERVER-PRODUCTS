import { conectarDB, db } from "../config/db";

// Excepción para probar el error a la DB
jest.mock('../config/db')

describe('connectDB', () => {

    it('should handle database connection error', async () => {
        jest.spyOn(db, 'authenticate')
            .mockRejectedValueOnce(new Error('Hubo un error en la conexión con la DB'))

        const consoleSpy = jest.spyOn(console, 'log')
        

        await conectarDB()

        expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringContaining('Hubo un error en la conexión con la DB')
        )
    })
})