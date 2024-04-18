const router = require('express').Router();
const { Router } = require('express');
const CartController = require('../controllers/cartController');
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken');
const cartController = require('../controllers/cartController');

router.post("/",verifyTokenAndAuthorization, cartController.addProductToCart);

router.get("/decrement/:id",verifyTokenAndAuthorization, cartController.decrementProductQty);

router.delete("/:id",verifyTokenAndAuthorization, cartController.removeCartItem);

router.get("/",verifyTokenAndAuthorization, cartController.getCart);

router.get("/count",verifyTokenAndAuthorization, cartController.getCartCount);

module.exports = router;