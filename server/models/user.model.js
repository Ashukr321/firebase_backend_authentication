import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  usernmae: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: ['true', 'username is required!'],
    unique: true,
  },
  email: {
    type: String,
    required: ['true', 'email is required!'],
    lowsercase: true,
    uniquue: true,
    match: [/.+@.+\..+/, 'Enter a valid email address']
  },
  passwrod: {
    type: String,
    required: ['true', 'password is required!'],
    minLength: 8,
  }
}, {
  timestamps: true
})

// create the userSchema
const User = mongoose.model('User', userSchema);

// export User model
export default User;