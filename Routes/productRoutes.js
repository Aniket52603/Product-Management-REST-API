const express = require('express')
const router = express.Router()

const {getAllProduct,updateProduct,newProduct,deleteProduct} = require('../controllers/productController');

router.get('/products',getAllProduct);
router.post('/products',newProduct);
router.delete('/products/:id',deleteProduct);

router.put('/products/:id',updateProduct);

// middleware that is specific to this router


module.exports = router
