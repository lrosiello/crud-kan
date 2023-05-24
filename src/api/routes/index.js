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
        deleteLayer, 
        updateCategory,
        updateLayer} = require("../apiController/index");


//ENDPOINTS
router.get("/categories", getCategories);
router.get("/layers", getLayers);
router.get('/categories/:id', getCategoryById);
router.get('/layers/:id', getLayerById);
router.post('/categories', addCategory);
router.post('/layers', addLayer);
router.delete('/categories/:id', deleteCategory);
router.delete('/layers/:id', deleteLayer);
router.put('/categories/:id', updateCategory);
router.put('/layers/:id', updateLayer);

module.exports = router;