import Category from '../models/categoryModel.js'
import Vehicle from '../models/vehicleModel.js';

const createCategory = async (req, res) => {
    if(req.body) {
        const category = new Category(req.body);
        await category.save()
        .then(data => {
            res.status(200).send({ data: data })
        })
        .catch(error => {
            res.status(500).send({ error: error.message })
        })
    }
}

const getAllCategories = async (req, res) => {
    const categories = await Category.find({})
    res.json(categories)
}

const getCategoryVehicle = async (req, res) => {
    await Category.findById(req.params.id)
    .populate('vehicle', 'code model type name')
    .then(data => {
        res.status(200).send({ vehicle: data.vehicle })
    })
    .catch(error => {
        res.status(500).send({ error: error.message })
    })
}

const getValue = async (req, res) => {
    const vehicleTypeId = req.body.vehicleTypeId
    const categoryTypeId = req.body.categoryTypeId
    const duration = req.body.duration

    const vehicle = await Vehicle.findById(vehicleTypeId)
    if(!vehicle) {
        res.status(401).json({
            success: false,
            message: 'vehicle not found'
        })
    }
    const category = await Category.findById(categoryTypeId)
    if(!category) {
        res.status(401).json({
            success: false,
            message: 'Category not found'
        })
    }

    const total = category.amount * Number(duration)
        res.status(200).json({
            success: true,
            price: total
        })
}

export { createCategory, getAllCategories, getCategoryVehicle, getValue }