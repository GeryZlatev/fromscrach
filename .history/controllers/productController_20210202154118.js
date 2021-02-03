const { Router } = require('express');
const productService = require('../services/productService');

const router = Router();

router.get('/', (req, res) => {
    let productsDB = productService.getAll()
    res.render('home', { title: 'Home Page | Cubicle', productsDB });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create Page | Cubicle' });
});

router.post('/create', (req, res) => {
    // Validate inputs;
    productService.create(req.body);

    res.redirect('/')
})

router.get('/details/:productId', (req, res) => {
    // console.log(req.params.productId);

    let product = pro
    res.render('details', { title: 'More Details | Cubicle' });
})

module.exports = router;