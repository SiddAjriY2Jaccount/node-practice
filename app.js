const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');  // for MongoDB
const blogRoutes = require('./routes/blogRoutes') //import from blogRoutes


//express app
const app = express(); //instantiate

//connect to MongoDB Atlas
// Listening to Requests at Port 3000 only upon async task of connecting to DB is done
const dbURI = 'mongodb+srv://y2jsiddajri:123@nodepractice.figrx.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));


// register view engine => EJS
app.set('view engine', 'ejs');  // we're setting view engine to search the views folder for templates


//middleware => static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); //passes all the urlencoded data and makes it accessible as an object
app.use(morgan('dev')); //middleware -> morgan


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

// mongoose and mongo testing routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'The SEVEN :O',
    snippet: 'Stronger than ever',
    body: 'Homelander is occupied with his son but new recruit Stromfront and silent assassin Black Noir are wreaking havoc'
  })

  blog.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('5f07704cef9c3741145d6c86')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});


// Index page -> new method with express and EJS
app.get('/', (req, res) => {
  /*
  const blogs = [
    {title: 'Supes', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'The Boys', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Urban vs Starr', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
  */
 res.redirect('/blogs');
});


// retrieve all blog routes from blogroutes.js
app.use('/blogs', blogRoutes)


// About page route
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

