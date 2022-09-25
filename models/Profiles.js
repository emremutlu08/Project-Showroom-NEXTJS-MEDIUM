import { Schema, model, models } from 'mongoose';

const ProfilesSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  myDetails: {
    type: String,
  },
  giveNameToButton: {
    type: String,
  },
  addOneUrl: {
    type: String,
  },
  title: {
    type: String,
  },
  creatorId: {
    type: String,
  },
  creatorEmail: {
    type: String,
  },
  creatorDisplayName: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default models.Profiles || model('Profiles', ProfilesSchema);
