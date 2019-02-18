const express = require('express');
const cookieParser = require('cookie-parser');

const session = require('./middleware/session');
const flash = require('./middleware/flash');
const auth = require('./middleware/auth');
const user = require('./middleware/user');

const mainController = require('./controllers/main');
const suggestionController = require('./controllers/suggestion');

const server = express();

server.set('view engine', 'pug');

server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(session);
server.use(flash);
server.use(user);

// function createMiddleware(options) {
// 	return function(req, res, next) {
// 	}
// }

server.get('/', mainController.showMain)
server.post('/', mainController.login)

server.use(auth);

server.get('/suggestions', suggestionController.showSuggestions);
server.post('/suggestions', suggestionController.createSuggestion); 	// Создать предложение // Перенаправить на список
server.get('/suggestions/:id', suggestionController.showSuggestion);
server.post('/suggestions/:id', suggestionController.toggleVote);

server.listen(3000, 'localhost', () => console.log('Server works'));