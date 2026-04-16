import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  isdelete: {
    type: Boolean,
    required: false,
    default : false
  },
  createdBy: String,
//   createdAt: {
//     type: Date ,
//     required: false
//   },
  updatedBy: {
    type: String ,
    required: false
  },
//   updatedAt: {
//     type: Date ,
//     required: false
//   }
} ,{ timestamps: true } );

const Project = mongoose.model('projectDTO', projectSchema);

export default Project;