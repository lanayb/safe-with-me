const router = require('express').Router();

const homepage = require('./homepage');
const login = require('./login');
const signup = require('./signup');


router.use('/homepage', homepage);
router.use('/login', login);
router.use('/signup', signup);


module.exports = router;
