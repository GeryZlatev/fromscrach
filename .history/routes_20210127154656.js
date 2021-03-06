const { Router } = require('express');
const productController = require('./controllers/productController');
const aboutController = require('./controllers/aboutController');
const router = Router();

router.use(productController);
router.use(aboutController);

module.exports = router;