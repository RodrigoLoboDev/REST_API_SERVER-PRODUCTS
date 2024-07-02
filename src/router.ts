import { Router } from 'express'
import { createProduct, deleteProduct, getProductById, getProducts, updateAvailabilityProduct, updateProduct } from './handlers/product'
import { body, param } from "express-validator"
import { getErrors } from './middleware'

export const router = Router()

/**
 * @swagger
 * components:
 *      schemas:
 *          Product:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The Product ID
 *                      example: 1
*                  name:
 *                      type: string
 *                      description: The Product name
 *                      example: Monitor Curvo de 27 pulgadas
*                  price:
 *                      type: number
 *                      description: The Product price
 *                      example: 700
*                  availability:
 *                      type: boolean
 *                      description: The Product availability
 *                      example: true
 */

router.get('/', getProducts)

/**
 * @swagger
 * /api/products:
 *      get:
 *          summary: Get a list of products
 *          tags:
 *              - Products
 *          description: Return a list of products
 *          responses:
 *              200:
 *                  description: Successful response
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Product' 
 */

router.get('/:id', 
    // Validación
    param('id').isNumeric().withMessage('ID no válido'),
    getErrors,
    getProductById
)

/**
 * @swagger
 * /api/products/:id:
 *      get:
 *          summary: Get a product by ID
 *          tags:
 *              - Products
 *          description: Return a product based on its unique ID
 *          parameters:
 *            - in: path
 *              name: id
 *              description: The ID of the product to retrieve
 *              required: true
 *              schema:
 *                  type: integer
 *          responses:
 *              404:
 *                  description: Not Found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      example: Producto no Encontrado
 *              
 *              400:
 *                  description: Bad Request - Invalid ID
 * 
 *              200:
 *                  description: Successful response
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Product' 
 */


router.post('/', 
    // Validación
    body('name')
        .notEmpty().withMessage('El nombre del Producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio del Producto no puede ir vacio')
        .custom( value => value > 0).withMessage('Precio no válido'),
    getErrors,
    createProduct
)

/**
 * @swagger
 * /api/products:
 *      post:
 *          summary: Create a new product
 *          tags:
 *              - Products
 *          description: Return a new product
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                                  example: "Monitor Curvo 29 pulgadas"
 *                              price:
 *                                  type: number
 *                                  example: 399
 *          responses:
 *              400:
 *                  description: Bad Request - Invalid Input Data
 * 
 *              201:
 *                  description: Product Created Successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Product' 
 * 
 */

router.put('/:id', 
    // Validación
    param('id').isNumeric().withMessage('ID no válido'),
    body('name')
        .notEmpty().withMessage('El nombre del Producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio del Producto no puede ir vacio')
        .custom( value => value > 0).withMessage('Precio no válido'),
    body('availability')
        .isBoolean().withMessage('La Disponibilidad no puede ir vacio'),
    getErrors,
    updateProduct
)


/**
 * @swagger
 * /api/products/:id:
 *      put:
 *          summary: Update a product with user input
 *          tags:
 *              - Products
 *          description: Return the updated product
 *          parameters:
 *            - in: path
 *              name: id
 *              description: The ID of the product to retrieve
 *              required: true
 *              schema:
 *                  type: integer
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                                  example: "Monitor Curvo 29 pulgadas"
 *                              price:
 *                                  type: number
 *                                  example: 399
 *                              availability:
 *                                  type: boolean
 *                                  example: false
 *          responses:
 *              404:
 *                  description: Not Found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      example: Producto no Encontrado
 *              400:
 *                  description: Bad Request - Invalid Input Data
 * 
 *              200:
 *                  description: Product Updated Successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Product' 
 */


router.patch('/:id', 
    // Validación
    param('id').isNumeric().withMessage('ID no válido'),
    getErrors,
    updateAvailabilityProduct
)


/**
 * @swagger
 * /api/products/:id:
 *      patch:
 *          summary: Update the availability a product
 *          tags:
 *              - Products
 *          description: Return the updated product
 *          parameters:
 *            - in: path
 *              name: id
 *              description: The ID of the product to retrieve
 *              required: true
 *              schema:
 *                  type: integer
 *          responses:
 *              404:
 *                  description: Not Found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      example: Producto no Encontrado
 *              400:
 *                  description: Bad Request - Invalid Input Data
 * 
 *              200:
 *                  description: Product Updated Successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Product' 
 */


router.delete('/:id', 
    // Validación
    param('id').isNumeric().withMessage('ID no válido'),
    getErrors,
    deleteProduct
)


/**
 * @swagger
 * /api/products/:id:
 *      delete:
 *          summary: Delete a product
 *          tags:
 *              - Products
 *          description: Return the deleted product
 *          parameters:
 *            - in: path
 *              name: id
 *              description: The ID of the product to delete
 *              required: true
 *              schema:
 *                  type: integer
 *          responses:
 *              404:
 *                  description: Not Found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                                      example: Producto no Encontrado
 *              400:
 *                  description: Bad Request - Invalid Input Data
 * 
 *              200:
 *                  description: Product Updated Successfully
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: string
 *                              value: "Producto Eliminado" 
 */
