const router = require('express').Router();
const { User } = require('../models');

router.get('/', async(req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);

        const serializedUser = userData.map
        (user => user.get({plain: true}));
        console.log(serializedUser);
        res.render('confess');

    } catch(err) {
        return res.status(500).json(err);
    }
});

module.exports = router;



