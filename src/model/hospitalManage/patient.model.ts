import mongosh from 'mongoose';

const patientSchema = new mongosh.Schema({
    name : {
        type: String,
        required: true,
    },
    address : {
        type: String,
        required: true,
    },
    age : {
        type: Number,
        required: true,
    },
    bloodGroup : {
        type: String,
        required: true,
    },
    diagonosedWith : {
        type: String,
        required: true,
    },
    gender : {
        type: String,
        enum: ["M", "F", "O"] ,
        required: true,
    },
    admittedin: {
        type: mongosh.Schema.Types.ObjectId,
        ref: 'Hospital',
    }
}, {timestamps: true});

export const Patient = mongosh.model('Patient', patientSchema);