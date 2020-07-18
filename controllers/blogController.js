const Blog = require('../models/blog');
// naming convention, same as MDN: blog_index, blog_create_post, blog_create_get, blog_details, blog_delete 

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then((result) => {
        res.render('blogs/index', { blogs: result, title: 'All blogs' });
      })
      .catch((err) => {
        console.log(err);
      });
}

const blog_create_post = (req, res) => {
    //console.log(req.body);
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
        res.redirect('/blogs');
        })
        .catch((err) => {
        console.log(err);
        })
} 

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new blog' });
}

const blog_details = (req, res) => {
    const id = req.params.id;   //to fetch specific route param as mentioned above (Eg- :id)
    Blog.findById(id)
        .then(result => {
        res.render('blogs/details', { blog: result, title: result.title });
        })
        .catch(err => {
        console.log(err);
        })
}

const blog_delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
        // cannot render here because this was an AJAX request, so response needs to be JSON encoded
        res.json({ redirect: '/blogs' });
        })
        .catch(err => {
        console.log(err)
        });
}

module.exports = {
      blog_index,
      blog_create_post, 
      blog_create_get,
      blog_details,
      blog_delete
  }