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

router.post('/create', validateProduct, (req, res) => {
    // Validate inputs;
    productService.create(req.body);

    res.redirect('/')
})

router.get('/details/:productId', (req, res) => {
    // console.log(req.params.productId);

    let product = productService.getOne(req.params.productId)
    res.render('details', { title: 'More Details | Cubicle', product });
});

function validateProduct(req, res, next) {

    let isValid = true;
    if (req.body.name.trim().length < 2) {
        isValid = false;
    } else if (!req.body.imageUrl) {
        isValid = false;
    }

    if (isValid) {
        next();
    }
}

module.exports = router;