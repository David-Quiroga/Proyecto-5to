import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import platoService from '../../services/foodService';

export default function HomePagoCatalogo() {
  const [menu, setMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const navigate = useNavigate();

  const fetchReservations = async () => {
    try {
      const data = await platoService.getAllReservas(); // Obtener todos los platos
      setMenu(data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleCardClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleRefreshClick = (id) => {
    navigate(`/catalogo/${id}`);
  };

  return (
    <div>
      <h1>Reservaciones</h1>
      <center>
        <div>
          {menu.map((menus) => (
            <div key={menus.id} onClick={() => handleCardClick(menus)}>
              <h2>{menus.nombre}</h2>
              <p>Nombre: {menus.nombre}</p>
              <p>Descripcion: {menus.descripcion}</p>
              <p>Precio: {menus.precio}</p>
              <img src={menus.imagen} alt={menus.nombre} style={{ maxWidth: '100px', maxHeight: '100px' }} />
              <button onClick={() => handleRefreshClick(menus.id)}>Actualizar Plato</button>
            </div>
          ))}
        </div>
      </center>

      {selectedMenu && (
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
          <h2>{selectedMenu.nombre}</h2>
          <p>Descripción: {selectedMenu.descripcion}</p>
          <p>Precio: {selectedMenu.precio}</p>
          <p>Categoría: {selectedMenu.categoria}</p>
          <img src={selectedMenu.imagen} alt={selectedMenu.nombre} style={{ maxWidth: '300px', maxHeight: '300px' }} />
        </div>
      )}
    </div>
  );
}
