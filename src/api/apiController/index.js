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

const addCategory = async (req, res, next) => {
  try {
    const { nombreCategoria, descripcion, numeroOrden } = req.body;
    if(nombreCategoria){
      const newCategory = await apiModel.addCategory(nombreCategoria, descripcion, numeroOrden);
      if(newCategory === null){
        res.status(500).send("This category already exists, operation aborted");
      }else{
        res.status(200).json({
          message: "Category added successfully",
          category: newCategory,
        });
      }
    }else{
      res.status(500).send("Category name must be inserted");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
  next();
};

const addLayer = async (req, res, next) => {
  try {
    const { nombreCapa, descripcion, numeroOrden, categoria } = req.body;
    
      const newLayer = await apiModel.addLayer(nombreCapa, descripcion, numeroOrden, categoria);
      if(newLayer === null){
        res.status(500).send("The category chosen does not exist, could not create this layer");
      }else{
        res.status(200).json({
          message: "Layer added successfully",
          layer: newLayer,
        });
      }
  
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
  next();
};


//DELETE
const deleteCategory = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      res.status(500).send("The id value is not valid");
    } else {
      await apiModel.deleteCategory(id);
      res.status(200).json({message: "Category deleted successfully. Relationed layers could be deleted too"});  
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
  next();
};

const deleteLayer = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      res.status(500).send("The id value is not valid");
    } else {
      await apiModel.deleteLayer(id);
      res.status(200).json({message: "Layer deleted successfully."});  
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
  getLayerById,
  addCategory,
  addLayer,
  deleteCategory,
  deleteLayer,
};




