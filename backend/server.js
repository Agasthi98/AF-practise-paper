import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import connectDB from './config/db.js'


dotenv.config()

connectDB()

const app = express()
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('API Running....')
})

import vehicleRoutes from './routes/vehicle.js'
import categoryRoutes from './routes/category.js'


app.use('/api/vehicle', vehicleRoutes)
app.use('/api/category', categoryRoutes)

const PORT = 5500 || process.env.PORT

app.listen(PORT, console.log(`server running on PORT ${PORT}`.yellow.bold))

