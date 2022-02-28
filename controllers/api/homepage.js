const router = require("express").Router();
const { Confession } = require("../../models");

// /api/homepage/entry
router.get('/entry', async(req, res) => {
    try {
        const entry = await Confession.findAll();
        res.status(200).json(entry);
    } catch(err) {
        res.status(400).json(err);
    }
});

// /api/homepage/newEntry
router.post('/newEntry', async(req, res) => {
    try {
        const newEntry = await Confession.create({
            description: req.body.description,
            user_id: req.body.user_id,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(newEntry);
        });
        
    } catch(err) {
        res.status(400).json(err);
    }
    
});


module.exports = router;