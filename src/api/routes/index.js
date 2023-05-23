// api/routes/index.js

const { Router } = require("express");
const router = Router();

// METHODS
const { getCategories,
        getLayers,
        getCategoryById,
        getLayerById,
        addCategory,
        addLayer,
        deleteCategory, 
        deleteLayer } = require("../apiController/index");


//ENDPOINTS
router.get("/categories", getCategories);
router.get("/layers", getLayers);
router.get('/categories/:id', getCategoryById);
router.get('/layers/:id', getLayerById);
router.post('/categories', addCategory);
router.post('/layers', addLayer);
router.delete('/categories/:id', deleteCategory);
router.delete('/layers/:id', deleteLayer);

module.exports = router;