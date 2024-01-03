import mongoosh from 'mongoose';

const productSchema = new mongoosh.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive'],
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    stock: {
        type: Number,
        required: true,
        min: [0, 'Stock must be positive'],
    },
    category: {
        type: mongoosh.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    createdBy: {
        type: mongoosh.Schema.Types.ObjectId,
        ref: 'User',
    },

}, {timestamps: true});

export const Product = mongoosh.model('Product', productSchema);