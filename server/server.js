const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes'); // Add user routes

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/project-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes); // Use user routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
