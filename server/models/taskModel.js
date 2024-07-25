// server/models/taskModel.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignedTo: { type: String, required: true },
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'], default: 'Not Started' },
  dueDate: { type: Date, required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
