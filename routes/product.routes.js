const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/', auth, productCtrl.createProduct);
router.get('/', auth, productCtrl.getAllProducts);
router.get('/:id', auth, productCtrl.getProductById);
router.put('/:id', auth, productCtrl.updateProduct);
router.delete('/:id', auth, productCtrl.deleteProduct);

module.exports = router;
