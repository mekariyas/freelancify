import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import connectDb from './db/db.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000
app.use(cors())
connectDb().catch(error=>console.error(error))


app.get("/",(req, res)=>{
    res.status(200).json({"message":"Hello World"})
})

app.listen(port,()=>{
    console.log(`server running on port:${port}`)
})