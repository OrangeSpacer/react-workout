import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import colors from 'colors'


// Config
import { connectDB } from './config/db.js'

// Routes
import userRoutes from './routes/userRoutes.js'


dotenv.config()

connectDB()

const app = express()

if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))

app.use(express.json())

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})