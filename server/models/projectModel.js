// server/models/projectModel.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'], default: 'Not Started' },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
