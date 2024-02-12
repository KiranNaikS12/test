const express = require('express');
const bodyParser = require('body-parser');
const userController = require('../controller/userController')
const user_route = express();
user_route.set('view engine', 'ejs');
user_route.set('views', './views/user');
user_route.use(express.static('public'));
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));
user_route.get('/',userController.loadRegister)
user_route.post('/post',userController.loadInsertUser)

module.exports ={
    user_route
}