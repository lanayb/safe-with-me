const router = require("express").Router();
const { User } = require("../../models");


// /api/login/userLogin
router.get('/userLogin', async(req, res) => {
    try {
        const loginInfo = await User.findAll();
        res.status(200).json(loginInfo);
    } catch(err) {
        res.status(400).json(err);
    }
});

// /api/login/userLogin
router.post('/userLogin', async(req, res) => {
    try {
        const userLogin = await User.findOne({
            where: {
                user_name: req.body.username,
                // password: req.body.password,
            },
        });
        let password = userLogin.password;

        console.log(userLogin);
        if(!userLogin) {
            res.status(400).json({
                message: 'Wrong email or password. Try again please!'
            });
        } else if (req.body.password !== password) {
            res.status(400).json({
                message: 'Wrong email or password. Try again please!'
                
            });
        } else {

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json({
                user: userLogin, 
                message: 'Nice, you are now logged in!'
            });
        });
    }
    } catch(err) {
        res.status(400).json(err);
    }
});


// logout route
// api/login/logout
router.post('/logout', (req, res) => {
    if(req.sessiom.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;


        // const validPW = await userLogin.checkPassword(req.body.password);

        // if(!validPW) {
        //     res.status(400).json({
        //         message: 'Wrong email or password. Try again please!'
        //     });
        // }