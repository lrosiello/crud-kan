import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Layers = () => {
  const [layers, setLayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/layers')
      .then(response => {
        setLayers(response.data); 
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {layers.map(layer => (
        <p key={layer.id}>___{layer.nombre_categoria}/{layer.descripcion}/{layer.numero_orden}/{layer.categoria}</p>
      ))}
    </div>
  );
};

export default Layers;