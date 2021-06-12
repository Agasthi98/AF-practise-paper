import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({

    type: { type: String, required: true, trim: true },
    amount: { type: String, required: true, trim: true },
    vehicle: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'vehicle'}]
})

const Category = mongoose.model('category', CategorySchema)
export default Category