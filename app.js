const express = require('express');

//express app
const app = express(); //instantiate

// register view engine => EJS
app.set('viewEngine', 'ejs');  // we're setting view engine to search the views folder for templates


// listen for requests
app.listen(3000);

// routing
// old method

/*
app.get('/', (req, res) => {
  //res.send('<h1> The Boys by ERIC KRIPKE </h1>'); //automatically infers Content-Type, status codes etc.
  res.render('index');
});

app.get('/one', (req, res) => {
  res.sendFile('./views/9_1.html', { root: __dirname });
});

app.get('/two', (req, res) => {
  res.sendFile('./views/9_2.html', { root: __dirname });
});

app.get('/a', (req, res) => {
  //res.sendFile('./views/9_2.html', { root: __dirname });
  res.redirect('/one');
});


// ===================================================================================================================
// 404 page    ==> (use) function is done for every incoming request, therefore must always be at the bottom of a page
app.use((req, res) => {
  res.status(404).sendFile('./views/error_404.html', { root: __dirname }); //gotta manually set statusCode

});
*/

// new method with express and EJS
app.get('/', (req, res) => {
  const blogs = [
    {title: 'Supes', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'The Boys', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Urban vs Starr', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

