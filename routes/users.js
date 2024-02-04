const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Challenge
router.get('/cool/', function(req, res, next) {
  res.render('cool', { title: 'Challenge', message: 'You\'re so cool' });
});


module.exports = router;
