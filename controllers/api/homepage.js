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

router.post('/newEntry', async(req, res) => {
    try {
        const newEntry = await Confession.create(req.body);
        res.status(200).json(newEntry);
    } catch(err) {
        res.status(400).json(err);
    }
    
});


module.exports = router;