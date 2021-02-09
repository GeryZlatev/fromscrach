const { Router } = require('express');

const router = Router();
router.get('/create', (req, res) => {
    res.render('createAccessory')
});

router.post('/create', (req, res) => {

    res.redirect('/');
})

module.exports = router;