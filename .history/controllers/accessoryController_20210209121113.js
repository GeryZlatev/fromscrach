const { Router } = require('express');

const router = Router();
router.get('/create', (req, res) => {
    res.render('createAccessory')
});

router

module.exports = router;