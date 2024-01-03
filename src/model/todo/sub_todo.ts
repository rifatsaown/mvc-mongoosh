import mongoosh from 'mongoose';

const subTodoSchema = new mongoosh.Schema({
    content : {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoosh.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {timestamps: true});

export const SubTodo = mongoosh.model('SubTodo', subTodoSchema);