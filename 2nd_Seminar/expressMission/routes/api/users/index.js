var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    const result = {
        status: 200,
        message: "users 접근 성공!"
    }
    res.status(200).send(result);
});

router.use('/login', require('./login'));
router.use('/signup', require('./signup'));

module.exports = router;