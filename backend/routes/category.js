import express from 'express'
const router = express.Router()

import { createCategory, getAllCategories, getCategoryVehicle, getValue } from '../controllers/categoryController.js'


router.post('/create', createCategory)
router.get('/', getAllCategories)
router.get('/:id', getCategoryVehicle)
router.post('/getvalue', getValue)

export default router