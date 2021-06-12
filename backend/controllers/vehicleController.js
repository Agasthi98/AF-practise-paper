import Vehicle from '../models/vehicleModel.js'


const addVehicle = async (req, res) => {
    if(req.body) {
        const vehicle = new Vehicle(req.body);
        await vehicle.save()
        .then(data => {
            res.status(200).send({ data: data })
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        })
    }
}

const getVehicle = async (req, res) => {
    const vehicle = await Vehicle.find({})
    res.json(vehicle)
}



export {addVehicle, getVehicle}