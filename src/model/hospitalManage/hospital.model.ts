import mongosh from 'mongoose';

const hospitalSchema = new mongosh.Schema({
    name: {
        type: String,
        required: true,
    },
    address1: {
        type: String,
        required: true, 
    },
    address2: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    speciality: {
        type: String,
    },


}, {timestamps: true});

export const Hospital = mongosh.model('Hospital', hospitalSchema);