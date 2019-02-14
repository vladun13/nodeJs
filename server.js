// const http = require('http');
// http.createServer(
// 	server.on('request', (req, res) => {
// 		console.log(req.method);
// 		console.log(req.url);
// 		console.log(req.headers);
// 			res.writeHead(200, { 'Content-type': 'text/css; charset=utf-8;' });
// 			res.end(`
// 			.h1 {
// 				color: red;
// 			}
// 		`);
// 	})
// ).listen(3000, '127.0.0.1', () => console.log('Server works'));





const express = require('express');
// const querystring = require('querystring');
const cookieParser = require('cookie-parser');


const server = express();

server.set('view engine', 'pug');

server.use(express.static('public'))

server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

// server.get('/styles.css', (req, res) => {
// 	res.sendFile('./styles.css', { root: __dirname })
// })

server.get('/', (req, res) => {
	// const cookies = querystring.parse(req.headers.cookie);
	const username = req.cookies.username;
	// console.log(req.cookies);

// 	res.send(`
// 	<!DOCTYPE html>
// 	<html lang="en">
// 	<head>
// 		<meta charset="UTF-8">
// 		<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 		<meta http-equiv="X-UA-Compatible" content="ie=edge">
// 		<title>New Doc</title>
// 	</head>
// 	<body>
// 		${username ?
// 			`<p>Hi ${username}!</p>
// 			`
// 			:
// 			`
// 			<h1>Enter</h1>

// 		<form method="POST">
// 			<input type="text" name="username">
// 			<button type="submit">Enter</button>
// 		</form>
// 		`
// 		}
// 	</body>
// 	</html>
// 	`);

res.render('index', {
	username
});

})




server.post('/', (req, res) => {
	res.cookie('username', req.body.username);

// 	res.send(`
// 	<!DOCTYPE html>
// 	<html lang="en">
// 	<head>
// 		<meta charset="UTF-8">
// 		<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 		<meta http-equiv="X-UA-Compatible" content="ie=edge">
// 		<title>New Doc</title>
// 	</head>
// 	<body>
		
// 	</body>
// 	</html>
// 	`);
res.redirect('/');
})

server.get('/suggestions', (req, res) => {
	// Показать список предложений
	throw new Error('Not implemented');
});

server.post('/suggestions', (req, res) => {
	// Создать предложение
	// Перенаправить на список
	throw new Error('Not implemented');
});

server.get('/suggestions/1', (req, res) => {
	// Показать предложение
	throw new Error('Not implemented');
});

server.post('/suggestions/1', (req, res) => {
	// Добавить голос и перенаправить на предложение
	throw new Error('Not implemented');
});

server.listen(3000, 'localhost', () => console.log('Server works'));