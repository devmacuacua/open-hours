const express = require('express') ;
const route = express.Router();

const {
    create,
    read
} = require('../controllers/authController');

route.post('/', create );
route.get('/:userId', read );

module.exports = route;