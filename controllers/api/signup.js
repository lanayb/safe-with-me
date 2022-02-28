const router = require('express').Router();
// const req = require('express/lib/request');
const { User } = require('../../models');

// /api/signup/userSignup
router.get('/userSignup', async(req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch(err) {
        res.status(400).json(err);
    }
});


// /api/signup/userSignup
router.post('/userSignup', async(req, res) => {
    console.log(req.body);
    try {
        const userSignup = await User.create({
            user_name: req.body.user_name,
            password: req.body.password,
            age: req.body.age,
            // user_name: "auntlarry",
            // password: "something2003",
            // age: 20,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.json(userSignup);
        });
      
    } catch(err) {
        res.status(400).json(err);
    }
    
});

module.exports = router;