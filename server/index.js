require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Routes
const studentRoute = require('./routes/student');

// Mongoose connection
mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then(() => {
      console.log('DB CONNECTS SUCCESSFULLY');
    })
    .catch((error) => {
      console.error('DB GOT CRASH');
    });

// Middlewares used
app.use(bodyParser.json());
app.use(cors());

// Routes used
app.use("/api", studentRoute);

// Listen port
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App listening on port ${port}!`));