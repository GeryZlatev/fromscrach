const { Router } = require('express');
const productService = require('../services/productService');
const { validateProduct } = require('../helpers/productHelper');


const router = Router();

router.get('/', (req, res) => {

    let productsDB = productService.getAll(req.query, callback)
    res.render('home', { title: 'Home Page | Cubicle', productsDB });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create Page | Cubicle' });
});

router.post('/create', validateProduct, (req, res) => {
    // Validate inputs;
    productService.create(req.body, (err) => {
        if (err) {
            return res.status(500).end()
        }
        res.redirect('/')
    });

    // productService.create(req.body)
    //     .then(() => res.redirect('/'))
    //     .catch(() => res.status(500).end())


})

router.get('/details/:productId', (req, res) => {
    // console.log(req.params.productId);

    let product = productService.getOne(req.params.productId)
    res.render('details', { title: 'More Details | Cubicle', product });
});



module.exports = router;