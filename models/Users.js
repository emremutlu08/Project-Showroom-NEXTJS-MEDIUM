import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username.'],
  },
  userImageUrl: {
    type: String,
  },
  userDescription: {
    type: String,
  },
  userEmail: {
    type: String,
  },
});

export default mongoose.models.User || mongoose.model('Users', UsersSchema);
