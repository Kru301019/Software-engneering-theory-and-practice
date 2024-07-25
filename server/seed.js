// server/seed.js
const mongoose = require('mongoose');
const Project = require('./models/projectModel');
const Task = require('./models/taskModel');

// MongoDB connection string
const dbURI = 'mongodb://localhost:27017/yourDB';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    seedDatabase();
  })
  .catch(err => console.log(err));

const seedDatabase = async () => {
  try {
    // Clear existing data
    await Project.deleteMany({});
    await Task.deleteMany({});

    // Create Projects
    const project1 = new Project({
      name: 'Project 1',
      description: 'Description for Project 1',
      status: 'In Progress',
      startDate: new Date(),
    });

    const project2 = new Project({
      name: 'Project 2',
      description: 'Description for Project 2',
      status: 'Not Started',
      startDate: new Date(),
    });

    // Save projects
    await project1.save();
    await project2.save();

    // Create Tasks
    const task1 = new Task({
      title: 'Task 1',
      description: 'Description for Task 1',
      assignedTo: 'User A',
      status: 'Not Started',
      dueDate: new Date(),
      project: project1._id,
    });

    const task2 = new Task({
      title: 'Task 2',
      description: 'Description for Task 2',
      assignedTo: 'User B',
      status: 'In Progress',
      dueDate: new Date(),
      project: project2._id,
    });

    // Save tasks
    await task1.save();
    await task2.save();

    console.log('Database seeded successfully');
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
