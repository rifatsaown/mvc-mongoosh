import mongoosh from 'mongoose';

const orderItemSchema = new mongoosh.Schema({
    product: {
        type: mongoosh.Schema.Types.ObjectId,
        ref: 'Product',
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const orderSchema = new mongoosh.Schema({
    orderPrice : {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoosh.Schema.Types.ObjectId,
        ref: 'User',
    },
    items: [orderItemSchema],
    status: {
        type: String,
        enum: ['pending', 'delivered', 'cancelled'],
        default: 'pending',
    },
    address: {
        type: String,
        required: true,
    },

}, {timestamps: true}); // timestamps: true adds createdAt and updatedAt fields

export const Order = mongoosh.model('Order', orderSchema);