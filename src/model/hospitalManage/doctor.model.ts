import mongosh from 'mongoose';

const doctorSchema = new mongosh.Schema({
   name : {
         type: String,
         required: true,
    },
    address : {
        type: String,
        required: true,
    },
    salary : {
        type: Number,
        required: true,
    },
    qualification : {
        type: String,
        required: true,
    },
    experienceInYear : {
        type: Number,
        default: 0,
    },
    worksInHospitals: [{
        type: mongosh.Schema.Types.ObjectId,
        ref: 'Hospital',
    }]
}, {timestamps: true});

export const Doctor = mongosh.model('Doctor', doctorSchema);