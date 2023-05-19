// apiController/index.js

const apiModel = require("../apiModel/index");


//GET ALL
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


//GET BY ID
const getCategoryById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      res.status(500).send("The id value is not valid");
    } else {
      const category = await apiModel.getCategoryById(id);
      if (!category) {
        res.status(500).send("This category does not exists");
      } else {
        res.status(200).json(category);
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
  next();
};

const getLayerById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      res.status(500).send("The id value is not valid");
    } else {
      const layer = await apiModel.getLayerById(id);
      if (!layer) {
        res.status(500).send("This layer does not exists");
      } else {
        res.status(200).json(layer);
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
  next();
};

module.exports = {
  getCategories,
  getLayers,
  getCategoryById,
  getLayerById
};
