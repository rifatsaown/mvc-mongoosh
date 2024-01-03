import mongoosh from 'mongoose';

const todoSchema = new mongoosh.Schema({
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
    subTodos: [{
        type: mongoosh.Schema.Types.ObjectId,
        ref: 'SubTodo',
    }] // array of subTodos

}, {timestamps: true});

export const Todo = mongoosh.model('Todo', todoSchema);