import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
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
  },
  creatorId: {
    type: String,
  },
  creatorDisplayName: {
    type: String,
  },
  creatorFirstName: {
    type: String,
  },
  creatorLastName: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default models.Projects || model('Projects', ProjectSchema);
