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
    const response = await pool.query(
      "SELECT * FROM capas WHERE id = $1",
      [id]
    );
    return response.rows[0];
  } catch (error) {
    console.error(error);
    throw new Error("Internal Server Error");
  }
};

module.exports = {
  getCategories,
  getLayers,
  getCategoryById,
  getLayerById
};
