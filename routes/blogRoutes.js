const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

// Blogs -> Routes
router.get('/', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then((result) => {
        res.render('index', { blogs: result, title: 'All blogs' });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
// POST request to create a blog, hit submit and then redirect to /blogs page
router.post('/', (req, res) => {
    //console.log(req.body);
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
        res.redirect('/blogs');
        })
        .catch((err) => {
        console.log(err);
        })
})

// render form to create blog 
router.get('/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});


// GET request to access specific blog using route params
router.get('/:id', (req, res) => {
    const id = req.params.id;   //to fetch specific route param as mentioned above (Eg- :id)
    Blog.findById(id)
        .then(result => {
        res.render('details', { blog: result, title: result.title });
        })
        .catch(err => {
        console.log(err);
        })
})

// Handle DELETE request from frontend to delete a blog post
router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
        // cannot render here because this was an AJAX request, so response needs to be JSON encoded
        res.json({ redirect: '/blogs' });
        })
        .catch(err => {
        console.log(err)
        });
})


// export for invoking in app.js
module.exports = router;

