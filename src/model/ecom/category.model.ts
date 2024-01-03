import mongoosh from 'mongoose';

const categorySchema = new mongoosh.Schema({
    name: {
        type: String,
        required: true,
    }
}, {timestamps: true});

export const Category = mongoosh.model('Category', categorySchema);