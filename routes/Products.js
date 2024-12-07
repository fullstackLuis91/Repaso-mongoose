const express = require("express");
const router = express.Router()
const ProductController = require('../controllers/ProductController');

router.post('/create',ProductController.create)
router.get('/getAll',ProductController.getAll)
router.get('/id/:_id',ProductController.getById)
router.get('/getByName/:name',ProductController.getProductsByName)
router.delete('/id/:_id',ProductController.delete)
router.put('/id/:_id',ProductController.update)



module.exports = router;

