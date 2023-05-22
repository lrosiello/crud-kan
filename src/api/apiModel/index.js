// apiModel/index.js

const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "ags175ags175",
  database: "data_for_kan",
  port: "5432",
});

//GET ALL
const getCategories = async () => {
  try {
    const response = await pool.query("SELECT * FROM categorias");
    return response.rows;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};
const getLayers = async () => {
  try {
    const response = await pool.query("SELECT * FROM capas");
    return response.rows;
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

//GET BY ID
const getCategoryById = async (id) => {
  try {
    const response = await pool.query(
      "SELECT * FROM categorias WHERE id = $1",
      [id]
    );
    return response.rows[0];
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

const getLayerById = async (id) => {
  try {
    const response = await pool.query("SELECT * FROM capas WHERE id = $1", [
      id,
    ]);
    return response.rows[0];
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

//CREATE

const addCategory = async (nombreCategoria, descripcion, numeroOrden) => {
  try {
    const exists = await pool.query(
      "SELECT * FROM categorias WHERE nombre_categoria = $1",
      [nombreCategoria]
    );

    if (exists.rows.length === 0) {
      const response = await pool.query(
        "INSERT INTO categorias (nombre_categoria, descripcion, numero_orden) VALUES ($1, $2, $3)",
        [nombreCategoria, descripcion, numeroOrden]
      );

      const newCategory = await pool.query(
        "SELECT * FROM categorias WHERE nombre_categoria = $1",
        [nombreCategoria]
      );

      return newCategory.rows[0];

    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};


const addLayer = async (nombreCapa, descripcion, numeroOrden, categoria) => {
  try {
    const existingCategory = await pool.query(
      "SELECT * FROM categorias WHERE nombre_categoria = $1",
      [categoria]
    );

    if (existingCategory.rows.length > 0) {
      const response = await pool.query(
        "INSERT INTO capas (nombre_capa, descripcion, numero_orden, categoria) VALUES ($1, $2, $3, $4)",
        [nombreCapa, descripcion, numeroOrden, categoria]
      );

      const newLayer = await pool.query(
        "SELECT * FROM capas WHERE nombre_capa = $1",
        [nombreCapa]
      );

      return newLayer.rows[0];

    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};



module.exports = {
  getCategories,
  getLayers,
  getCategoryById,
  getLayerById,
  addCategory,
  addLayer,
};
