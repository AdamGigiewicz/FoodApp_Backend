const router = require('express').Router();
const { Router } = require('express');
const restaurantController = require('../controllers/restaurantController');
const {verifyTokenAndAuthorization} = require('../middleware/verifyToken');

router.post("/",verifyTokenAndAuthorization, restaurantController.addRestaurant);

router.get("/:code", restaurantController.getRandomRestaurants);

router.get("/all/:code", restaurantController.getAllNearbyRestaurants);

router.get("/byId/:id", restaurantController.getRestaurantById);

module.exports = router;