var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  /* This is the root of the route, so '/' is ok. */
  res.render('about', { title: 'About' });
});

module.exports = router;
