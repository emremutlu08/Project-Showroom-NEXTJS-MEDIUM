import mongoose from 'mongoose';
// CANNOT BE USE TO CREATE A NEW USER
// USE ONLY TO UPDATE THE USER
const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username.'],
    unique: true,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  userDescription: {
    type: String,
  },
  emailVerified: {
    type: Boolean,
  },
  email: {
    type: String,
    required: [true, 'Please provide an email address.'],
    unique: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.models.Users || mongoose.model('Users', UsersSchema);
