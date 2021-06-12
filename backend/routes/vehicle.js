import exppress from 'express'
const router = exppress.Router()

import { addVehicle, getVehicle } from '../controllers/vehicleController.js'


router.post('/addvehicle', addVehicle)
router.get('/getVehicles', getVehicle)

export default router