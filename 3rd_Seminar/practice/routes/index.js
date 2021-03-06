var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.use('/user', require('./user'));
router.use('/post', require('./post'));

module.exports = router;
