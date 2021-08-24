
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 8000;

require('dotenv').config()
const connectedDB = require('./config/db')
const  authRoutes= require('./routes/authRoutes');
const  userRoutes= require('./routes/userRoutes');

connectedDB();


// Init Middleware
app.use(express.json());

// parse application/json
app.use(bodyParser.json())

app.use('/open-hours', authRoutes );
app.use('/users', userRoutes );

app.listen(port, () => {
  console.log(`Hello, app listening at http://localhost:${port}`)
});
