
// Siempre necesitamos estos dos import
import request from "supertest";
import { server } from "../../server";

describe('POST /api/products', () => {
    // send - seria lo que le enviamos en el body

    // debería mostrar errores de validación
    it('should display validation errors', async () => {
        const response = await request(server).post('/api/products').send({})
        expect(response.status).toEqual(400)
        expect(response.body).toHaveProperty('errores')

        expect(response.status).not.toEqual(200)
        // expect(response.status).not.toHaveLength(2)
    })

    // debería ingresar un precio válido
    it('should enter a valid price',async () => {
        const response = await request(server).post('/api/products').send({
            name: 'Teclado gamer',
            price: 0
        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errores')
        expect(response.body.errores[0].msg).toBe('Precio no válido')
    })

    // debería crear un nuevo producto
    it('should create a new product', async () => {
        const response = await request(server).post('/api/products').send({
            name: "Mouse Gamer - DESDE TESTING",
            price: 250
        })

        // Lo que esperamos
        expect(response.status).toEqual(201) // funciona igual que toBe
        expect(response.body).toHaveProperty('data')

        // Lo que no esperamos
        expect(response.status).not.toBe(200)
        expect(response.status).not.toBe(404)
        expect(response.body).not.toHaveProperty('errores')
    })
})

describe('GET /api/products', () => {

    // deberia traer todos los productos
    it('should bring all the products',async () => {
        const response = await request(server).get('/api/products')

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('data')
        expect(response.headers['content-type']).toMatch(/json/)

        expect(response.status).not.toBe(400)
        expect(response.status).not.toBe(404)
        expect(response.body).not.toHaveProperty('errores')
    })
})

describe('GET /api/products/:id', () => {

    // debería mostrar un error al no encontrar un producto
    it('should show an error not finding a product', async () => {
        const productId = 4000
        const response = await request(server).get(`/api/products/${productId}`)

        expect(response.status).toBe(404)
        expect(response.body.error).toBe('Producto No Encontrado')
    })

    // debería mostrar un error ingresar un texto en la url
    it('should show an error entering text in the url', async () => {
        const productId = 'hola'
        const response = await request(server).get(`/api/products/${productId}`)

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errores')
        expect(response.body.errores[0].msg).toBe('ID no válido')

        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty('data')
    })

    // debería traer un producto por su id
    it('should bring a product by its id',async () => {
        const productId = 1
        const response = await request(server).get(`/api/products/${productId}`)

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('data')

        expect(response.status).not.toBe(400)
        expect(response.status).not.toBe(404)
        expect(response.body).not.toHaveProperty('errores')
    })
})

describe('PUT /api/products/:id', () => {

    // debería mostrar mensajes de error de validación al actualizar un producto
    it('should display validation error messages when updating a product', async () => {
        const productId = 1
        const response = await request(server).put(`/api/products/${productId}`).send({})

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errores')
        expect(response.body.errores).toHaveLength(5)

        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty('data')
    })

    // deberia validar cuando el precio es menor a 0
    it('should validate that the price is greater than 0', async () => {
        const productId = 1
        const response = await request(server).put(`/api/products/${productId}`).send({
            name: "Tablet 20 pulgadas",
            price: -200,
            availability: false
          })

          expect(response.status).toBe(400)
          expect(response.body).toHaveProperty('errores')
          expect(response.body.errores).toHaveLength(1)
          expect(response.body.errores[0].msg).toBe('Precio no válido')
  
          expect(response.status).not.toBe(200)
          expect(response.body).not.toHaveProperty('data')
    })

     // debería mostrar un error ingresar un texto en la url
     it('should show an error entering text in the url', async () => {
        const productId = 'hola'
        const response = await request(server).put(`/api/products/${productId}`)

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errores')
        expect(response.body.errores[0].msg).toBe('ID no válido')

        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty('data')
    })

    // debería mostrar un error 404 al no encontrar un producto
    it('should show an error 404 not finding a product', async () => {
        const productId = 4000
        const response = await request(server).put(`/api/products/${productId}`).send({
            name: "Tablet 20 pulgadas",
            price: 500,
            availability: false
          })

        expect(response.status).toBe(404)
        expect(response.body.error).toBe('Producto No Encontrado')

        expect(response.status).not.toBe(200)
    })

    // Deberia actualizar un producto existente
    it('shoud updating a product exist', async () => {
        const productId = 1
        const response = await request(server).put(`/api/products/${productId}`).send({
            name: "Tablet 20 pulgadas",
            price: 500,
            availability: false
          })

          expect(response.status).toBe(200)
          expect(response.body).toHaveProperty('data')
  
          expect(response.status).not.toBe(400)
          expect(response.status).not.toBe(404)
          expect(response.body).not.toHaveProperty('errores')
    })
})

describe('PATCH /api/products/:id', () => {

    // debería mostrar un error 404 al no encontrar un producto
    it('should show an error 404 not finding a product', async () => {
        const productId = 4000
        const response = await request(server).patch(`/api/products/${productId}`)

        expect(response.status).toBe(404)
        expect(response.body.error).toBe('Producto No Encontrado')

        expect(response.status).not.toBe(200)
    })

    // debería mostrar un error ingresar un texto en la url
    it('should show an error entering text in the url', async () => {
        const productId = 'hola'
        const response = await request(server).patch(`/api/products/${productId}`)

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errores')
        expect(response.body.errores[0].msg).toBe('ID no válido')

        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty('data')
    })

    // Deberia actualizar un producto por su ID
    it('should update a product for ID', async () => {
        const productId = 1
        const response = await request(server).patch(`/api/products/${productId}`)

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('data')

        expect(response.status).not.toBe(400)
        expect(response.status).not.toBe(404)
        expect(response.body).not.toHaveProperty('errores')
    })
})

describe('DELETE /api/products/:id', () => {

    // debería mostrar un error 404 al no encontrar un producto
    it('should show an error 404 not finding a product', async () => {
        const productId = 4000
        const response = await request(server).delete(`/api/products/${productId}`)

        expect(response.status).toBe(404)
        expect(response.body.error).toBe('Producto No Encontrado')

        expect(response.status).not.toBe(200)
    })

    // debería mostrar un error ingresar un texto en la url
    it('should show an error entering text in the url', async () => {
        const productId = 'hola'
        const response = await request(server).delete(`/api/products/${productId}`)

        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty('errores')
        expect(response.body.errores[0].msg).toBe('ID no válido')

        expect(response.status).not.toBe(200)
        expect(response.body).not.toHaveProperty('data')
    })

    // Deberia eliminar un producto por su ID
    it('should delete a product for ID', async () => {
        const productId = 1
        const response = await request(server).delete(`/api/products/${productId}`)

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('data')

        expect(response.status).not.toBe(400)
        expect(response.status).not.toBe(404)
        expect(response.body).not.toHaveProperty('errores')
    })
})