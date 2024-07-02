import { Request, Response } from "express" // Solo es necesario si trabajas con TypeScript
import Product from "../models/Product.model";


export const getProducts = async (req: Request, res: Response) => {
    const products = await Product.findAll({
        attributes: {exclude: ['createdAt', 'updatedAt']}, // excluir algunos resultados,
        order: [
            ['id', 'ASC'] // ASC (ascendente) - DESC (descendente)
        ]
    })
    res.json({data: products})
}

export const getProductById = async (req: Request, res: Response) => {
    const id = req.params.id
    // console.log(id);
    const product = await Product.findByPk(id)

    if (!product) {
        return res.status(404).json({error: 'Producto No Encontrado'})
    }

    res.json({data: product})
}

export const createProduct = async (req: Request, res: Response) => {
    const product = await Product.create(req.body)
    res.status(201).json({data: product})
}

export const updateProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    // console.log(id);
    const product = await Product.findByPk(id)

    if (!product) {
        return res.status(404).json({error: 'Producto No Encontrado'})
    }

    // Actualizar
    await product.update(req.body)
    await product.save()

    res.json({data: product})
}

export const updateAvailabilityProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    // console.log(id);
    const product = await Product.findByPk(id)

    if (!product) {
        return res.status(404).json({error: 'Producto No Encontrado'})
    }

    // Actualizar
    product.availability = !product.dataValues.availability // con esto me evito pasar algo en el body
    await product.save()

    res.json({data: product})
}

export const deleteProduct = async (req: Request, res: Response) => {
    const id = req.params.id
    // console.log(id);
    const product = await Product.findByPk(id)

    if (!product) {
        return res.status(404).json({error: 'Producto No Encontrado'})
    }

    // Eliminar
    await product.destroy()

    res.json({data: product})
}