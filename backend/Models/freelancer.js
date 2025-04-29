import {Schema, model}  from "mongoose"

const freelancerSchema = new Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required: true,
        unique: true, 
        index: true
    },
    email:{
        type: String,
        required: true,
        unique: true, 
        trim: true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    bio:{
        type: String,
        maxLength: 150
    },
    skills:{
        type:[String],
        required: true
    },
    qualifications:{
        type:[String],
        default:[]
    },
    role:{
        type: String,
        default: "freelancer"
    },
    experience:{
        type:String,
        enum: ["beginner", "intermediate", "Senior"]
    },
    profilePicture:{
        type: String,
        default:'/img/default/avatar.png'
    },
    portfolio:{
        type: [String],
        default:[]
    }
}, {timestamps: true})

const freelancerModel = model("Freelancer", freelancerSchema)

export default freelancerModel