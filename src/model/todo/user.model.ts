import mongoosh from 'mongoose';

const userSchema = new mongoosh.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  password: {
        type: String,
        require: true,
        minlength: [6, 'Password must be at least 6 characters long'],
  },
}, {timestamps: true});

export const User=  mongoosh.model('User', userSchema);