// apiController/index.js

const apiModel = require("../apiModel/index");

const getCategories = async (req, res, next) => {
  try {
    const categories = await apiModel.getCategories();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
  next();
};

const getLayers = async (req, res, next) => {
  try {
    const layers = await apiModel.getLayers();
    res.status(200).json(layers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
  next();
};

module.exports = {
  getCategories,
  getLayers
};