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
    try {
        await authService.register(req.body);
    } catch (error) {

    }
    res.redirect('/auth/register')
})

module.exports = router;