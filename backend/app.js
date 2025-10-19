const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const chatRoutes = require('./routes/chat'); // Correct path to your routes file



app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Mongo connected'))
  .catch(err => console.error(err));

// Import and use routes
app.use('/api/users', require('./routes/users'));
app.use('/api/profiles', require('./routes/profiles'));
app.use('/api/progress', require('./routes/progress'));
// app.use('/api/chat', require('./routes/chat'));
app.use('/api/chat', chatRoutes);

// app.use('/api/meals', require('./routes/meals'));
// app.use('/api/workouts', require('./routes/workouts'));
// app.use('/api/chat', require('./routes/chat'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
