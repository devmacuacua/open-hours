
const express = require('express')
const app = express()
const port = process.env.PORT || 8000;

require('dotenv').config()
const connectedDB = require('./config/db')
const  authRoutes= require('./routes/authRoutes');


connectedDB();


// Init Middleware
app.use(express.json());

// parse application/json

app.use('/open-hours', authRoutes );


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Hello, app listening at http://localhost:${port}`)
});
