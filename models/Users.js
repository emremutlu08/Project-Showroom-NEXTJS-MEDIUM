import { Schema, model, models } from 'mongoose';

const UsersSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  defaultUserName: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  emailVerified: {
    type: Boolean,
    required: true,
  },
  displayName: {
    type: String,
    // required: true,
    // unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  accessToken: {
    type: String,
  },
  tokens: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default models.Users || model('Users', UsersSchema);
