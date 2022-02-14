import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username.'],
    unique: true,
  },
  userFullName: {
    type: String,
  },
  userImageUrl: {
    type: String,
  },
  userDescription: {
    type: String,
  },
  userEmail: {
    type: String,
    required: [true, 'Please provide an email address.'],
    unique: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  createdAt: {
    type: Date,
  },
});

export default mongoose.models.User || mongoose.model('Users', UsersSchema);
