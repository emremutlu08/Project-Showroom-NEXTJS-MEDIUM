import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  projectTitle: {
    type: String,
    required: [true, 'Please provide a project title.'],
  },
  thumbnailUrl: {
    type: String,
  },
  description: {
    type: String,
  },
  skillTags: {
    type: Array,
  },
  leftButtonTitle: {
    type: String,
  },
  leftButtonUrl: {
    type: String,
  },
  rightButtonTitle: {
    type: String,
  },
  rightButtonUrl: {
    type: String,
  },
  creatorEmail: {
    type: String,
    required: [true, 'Please provide an email address.'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.models.Project ||
  mongoose.model('Project', ProjectSchema);
