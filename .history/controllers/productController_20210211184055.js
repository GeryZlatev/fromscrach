const { Router } = require('express');
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');
const { validateProduct } = require('../helpers/productHelper');
const isAuthenticated = require('../middlewares/isAuthenticated');
const isGuest = require('../middlewares/isGuest');

// const fs = require('fs/promises')


const router = Router();

router.get('/', (req, res) => {

    productService.getAll(req.query)
        .then(productsDB => {
            res.render('home', { title: 'Home Page | Cubicle', productsDB });
        })
        .catch(err => {
            res.status(500).end()
        });

    //productsDB
});



router.get('/create', isAuthenticated, (req, res) => {
    res.render('create', { title: 'Create Page | Cubicle' });
});

router.post('/create', isAuthenticated, validateProduct, (req, res) => {
    // Validate inputs;
    productService.create(req.body, req.user._id)
        .then(() => {
            res.redirect('/')
        })

});

// productService.create(req.body)
//     .then(() => res.redirect('/'))
//     .catch(() => res.status(500).end())



router.get('/details/:productId', async(req, res) => {
    // console.log(req.params.productId);

    let product = await productService.getOneWithAccessories(req.params.productId)

    res.render('details', { title: 'More Details | Cubicle', product });


});

router.get('/:productId/attach', isAuthenticated, async(req, res) => {
    let product = await productService.getOne(req.params.productId);
    let accessories = await accessoryService.getAllWithout(product.accessories);

    res.render('attachAccessory', { product, accessories })
});

router.post('/:productId/attach', isAuthenticated, (req, res) => {
    productService.attachAccessory(req.params.productId, req.body.accessory)
        .then(() => {
            res.redirect(`/details/${req.params.productId}`);
        })

});

router.get('/:productId/edit', isAuthenticated, (req, res) => {
    productService.getOne(req.params.productId)
        .then(product => {
            res.render('editCube', product)
        })

});

router.post('/:productId/edit', isAuthenticated, validateProduct, (req, res) => {
    // TODO: Validate inputs!
    productService.updateOne(req.params.productId, req.body)
        .then(response => {
            res.redirect(`/details/${req.params.productId}`);

        })
        .catch(error => {

        })
})

router.get('/:productId/delete', isAuthenticated, (req, res) => {
    productService.getOne(req.params.productId)
        .then(product => {
            res.render('deleteCubePage', product)
        });
});
router.post('/:productId/delete', isAuthenticated, (req, res) => {
    productService.deleteOne()

})



module.exports = router;