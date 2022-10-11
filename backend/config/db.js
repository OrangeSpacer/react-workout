import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const conn  = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    }
    catch(error){
        console.log(error)
        process.exit(1)
    }
}