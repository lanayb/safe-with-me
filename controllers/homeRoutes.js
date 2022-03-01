const router = require('express').Router();
const { User, Confession } = require("../models");
const path = require('path');


// landing page
router.get('/', async(req,res) => {
    const conData = await Confession.findAll().catch((err) => {
        res.json(err);
    });
    const confess = conData.map((confess) => confess.get({ plain:true}));
    res.render('confess', {confess});
});


// signup page
router.get('/signup', async(req, res) => {
   const signupPg = await User.findAll().catch((err) => {
        res.json(err);
   });
   const signup = signupPg.map((signup) => signup.get({ plain:true }));
   res.render('signup', {signup});
});


// login
router.get('/login', async(req, res) => {
    const loginPg = await User.findAll().catch((err) => {
        res.json(err);
   });
   const login = loginPg.map((login) => login.get({ plain:true }));
   res.render('login', {login});
});

// homepage
router.get('/homepage', async(req,res) => {
    const home = await User.findAll().catch((err) => {
        res.json(err);
    });
    const homepage = home.map((homepage) => homepage.get({ plain:true}));
    res.render('homepage', {homepage});
});


module.exports = router;

//    const userSignup =  await User.findAll().catch((err) => {
//         res.json(err);
//    });

//    const signup = userSignup.map((signup) => signup.get({ plain:true}));
//    res.render('signup', {signup});