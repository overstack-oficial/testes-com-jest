const { Router } = require('express');

//Middleware
const authMiddleware = require('./app/Midlewares/auth');

//Controllers
const UserController = require('./app/Controllers/UserController');
const User = new UserController()

const routes = new Router();

routes.get('/', User.get);
routes.post('/user', authMiddleware, User.store);

module.exports = routes;