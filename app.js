const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
require('dotenv').config();

const app = express();

//Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Database connected`))
  .catch(err => console.error(err));

//Middlewares
app.use(helmet());
app.use(express.json());
app.use(cors());

// Routes
const containerRoutes = require('./routes/containerRoutes');

app.use('/api/v1', containerRoutes);

//Port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on ${port}`));
