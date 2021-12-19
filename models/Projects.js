import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  projectTitle: {
    type: any,
    required: [true, 'Please provide a project title.'],
  },
  thumbnailUrl: {
    type: any,
  },
  description: {
    type: any,
  },
  skillTags: {
    type: Array,
  },
  leftButtonTitle: {
    type: any,
  },
  leftButtonUrl: {
    type: any,
  },
  rightButtonTitle: {
    required: [true, 'Please provide an image url for this pet.'],
    type: any,
  },
  rightButtonUrl: {
    type: any,
  },
});

export default mongoose.models.Project ||
  mongoose.model('Project', ProjectSchema);
