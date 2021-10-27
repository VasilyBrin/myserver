const express = require('express');
// const booksRouter = express.Router();

const app = express(); // its working
const products = ['Apple', 'Pen', 'Computer'];

// app.use(express.static('public'));

app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.send('Its working');
});

app.get('/products', (req, res, next) => {
  next();
  // res.json({products});
});

// app.get('/products', (req, res, next) => {
// 	console.log('Page', req.query.page);
// 	res.send(products);
// });

app.get('/products/:id', (req, res, next) => {
  if (products[req.params.id]) {
    res.send(products[req.params.id]);
  } else {
    res.status(404).send('Product not found');
  }
});

// booksRouter.get('/', (req,res) => {
// 	res.send('Books');
// })

// booksRouter.get('/about', (req, res) => {
//   res.send('About books');
// });

// app.use('/books', booksRouter);

// app.get('/downloadBooks', (req, res, next) => {
//   res.download('./public/books.html');
// });

app.get('/downloadBooks', (req, res, next) => {
  res.download('./public/books.html', 'anothername', (err) => {
    console.log('File sent');
  });
});

// app.get('/blog', (req, res, next) => {
// 	res.redirect('https://akhromieiev.com');
// });

app.get('/blog', (req, res, next) => {
  res.redirect(301, '/');
});

app.listen(5000, () => {
  console.log('Its started', new Date());
});
