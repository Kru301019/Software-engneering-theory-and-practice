const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/projectRoutes'); // Adjust this path if necessary

const app = express();

// Middleware
app.use(bodyParser.json());

// DB Config
const db = 'your-mongodb-connection-string';

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api', projectRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
