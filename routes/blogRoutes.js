const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController')

// Blogs -> Routes
router.get('/', blogController.blog_index);
  
// POST request to create a blog, hit submit and then redirect to /blogs page
router.post('/', blogController.blog_create_post)

// render form to create blog 
router.get('/create', blogController.blog_create_get);

// GET request to access specific blog's details using route params
router.get('/:id', blogController.blog_details)

// Handle DELETE request from frontend to delete a blog post
router.delete('/:id', blogController.blog_delete)

// export for invoking in app.js
module.exports = router;

