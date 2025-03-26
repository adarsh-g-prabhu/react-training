import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: null
  }
}, { 
  timestamps: true 
});

// Create the model or retrieve it if it already exists
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;