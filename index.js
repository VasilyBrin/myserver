const express = require('express');

const app = express(); // its working

app.get('/', (req,res,next) => {
	res.send('Its working');
});

app.listen(5000, () => {
	console.log('Its started', new Date());
});