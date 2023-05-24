import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/categories')
      .then(response => {
        setCategories(response.data); 
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {categories.map(category => (
        <p key={category.id}>___{category.nombre_categoria}/{category.descripcion}/{category.numero_orden}</p>
      ))}
    </div>
  );
};

export default Categories;