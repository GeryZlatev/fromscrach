const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page | Cubicle' });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create Page | Cubicle' });
});

router.get('/details/:productId', (req, res) => {
    console.log(req.params.productId);
    res.render('details', { title: 'More Details | Cubicle' });
})

module.exports = router;