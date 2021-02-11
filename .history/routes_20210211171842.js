const { Router } = require('express');
const isAuthenticated = require('./middlewares/isAuthenticated');
const isGuest = require('./middlewares/isGuest');
const productController = require('./controllers/productController');
const accessoryController = require('./controllers/accessoryController');
const aboutController = require('./controllers/aboutController');
const authController = require('./controllers/authController');
const router = Router();

router.use('/', productController);
router.use('/auth', authController);
router.use('/about', aboutController);
router.use('/accessories', accessoryController)
router.get('*', (req, res) => {
    res.render('404', { title: 'Not Found! | Cubicle' });
})

module.exports = router;