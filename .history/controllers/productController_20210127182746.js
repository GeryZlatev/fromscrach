const { Router } = require('express');
const Cube = require('../models/Cube');
const id = require('uniqid');

const router = Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page | Cubicle' });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create Page | Cubicle' });
});

router.post('/create', (req, res) => {
    // Validate inputs;
    const data = req.body;

    console.log(cube);
    res.redirect('/')
})

router.get('/details/:productId', (req, res) => {
    // console.log(req.params.productId);
    res.render('details', { title: 'More Details | Cubicle' });
})

module.exports = router;