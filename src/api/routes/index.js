// api/routes/index.js

const { Router } = require("express");
const router = Router();

const { getCategories } = require("../apiController/index");
const { getLayers } = require("../apiController/index");

router.get("/categories", getCategories);
router.get("/layers", getLayers);

module.exports = router;