import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
     trim: true
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type : String,
     enum: ['Developer', 'Tester', 'Manager'] ,//enum
     required: true
  },
  employeeId: {
    type: Number,
    unique: true,
    required : true
  },
  // project: String,
  isdelete: {
    type: Boolean,
    required: false,
    default : false
  },

  project : {
    type : mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'projectDTO'
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
//   },
}, { timestamps: true } );

const Employee = mongoose.model('employeeDTO', employeeSchema);

export default Employee;