const express = require('express') ;
const route = express.Router();

const {
    create,
    read,
    list
} = require('../controllers/authController');

route.post('/', create );
route.get('/:userId', read );
route.get('/list', list );

module.exports = route;