//const router = require('express').Router();

const { Router } = require('express');
const router = Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register')
});

router.post('/register', async(req, res) => {

    res.redirect('/auth/register')
})

module.exports = router;