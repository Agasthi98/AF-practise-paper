import mongoose from 'mongoose'

const VehicleSchema = new mongoose.Schema({
    code: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    type: { type: String, required: true },
    name:  { type: String, required: true },
    category: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'category'}]
})



const Vehicle = mongoose.model('vehicle', VehicleSchema)
export default Vehicle