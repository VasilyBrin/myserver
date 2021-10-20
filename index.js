const express = require('express');

const app = express(); // its working
const products = ['Apple','Pen','Computer'];

app.get('/', (req,res,next) => {
	res.send('Its working');
});

app.get('/products', (req, res, next) => {
	res.send(products);
});

app.get('/products', (req, res, next) => {
	res.send(1);
});

app.listen(5000, () => {
	console.log('Its started', new Date());
});