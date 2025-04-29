import { Schema, model } from "mongoose"

const companySchema = new Schema({
    companyName: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    logo:{
        type: String,
        required: true,
        default: "/img/default/company.png"
    },
    bio:{
        type: String,
        maxLength: 150
    },
    website:{
        type: String,
        default:""
    },
    role:{
        type:String,
        default:"employer"
    }
},{timestamps: true})

const companyModel = model("Company", companySchema)

export default companyModel