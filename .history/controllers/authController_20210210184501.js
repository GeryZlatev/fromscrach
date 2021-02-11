//const router = require('express').Router();

const { Router } = require('express');
const router = Router();
const authService = require('../services/authService');

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register')
});

router.post('/register', async(req, res) => {

    const { username, password, repeatPassword } = req.body;

    if (password !== repeatPassword) {
        res.render('register', { message: 'Password missmatch!' });
        return;
    }

    try {
        await authService.register(req.body);
        res.redirect('/');
    } catch (error) {
        res.removeHeader('register', { error })
    }

})

module.exports = router;