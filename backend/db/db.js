import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

async function connectDb(){
    console.log('connecting to database')
    await mongoose.connect(process.env.MONGO_URI)
    console.log(`connected to ${mongoose.connection.host}`)
}

export default connectDb