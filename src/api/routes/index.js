// api/routes/index.js

const { Router } = require("express");
const router = Router();

// METHODS
const { getCategories, getLayers, getCategoryById, getLayerById } = require("../apiController/index");

//ENDPOINTS
router.get("/categories", getCategories);
router.get("/layers", getLayers);
router.get('/categories/:id', getCategoryById);
router.get('/layers/:id', getLayerById);

module.exports = router;