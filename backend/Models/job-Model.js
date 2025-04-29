import mongoose, { Schema, model } from 'mongoose';

const jobSchema = new Schema({
    title:{
        type: String,
        required: true,
        index: true
    },
    description:{
        type: String,
        required: true,
        maxLength: 500,
        minLength: 100
    },
    salary:{
        type: Number,
        required: true,
        min: 0
    },
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Company'
    },
    requirements:{
        type:String,
        required: true
    },
    deadline:{
        type: Date,
        required: true
    }, 
    qualifications:{
        type: [String],
        required: true
    },
    applicants:{
        type:[mongoose.Schema.Types.ObjectId],
        ref: 'Freelancer',
        default: []
    }
}, {timestamps: true})


const jobModel = model("Job", jobSchema)


export default jobModel