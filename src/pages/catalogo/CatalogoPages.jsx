import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import foodService from '../../services/foodService'; // Importa el servicio correctamente

const CatalogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newCatalogo, setNewCatalogo] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    imagen: '',
    categoria: '',
  });

  useEffect(() => {
    if (id) {
      // Si hay un ID en los parámetros, obtener los detalles del plato para editar
      foodService.getReservaById(id).then((data) => {
        setNewCatalogo(data);
      }).catch((error) => {
        console.error('Error fetching plato:', error);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCatalogo({
      ...newCatalogo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // Actualizar plato existente
      foodService.updateReserva(id, newCatalogo).then((data) => {
        console.log('Plato actualizado:', data);
        toast.success('Plato actualizado con éxito');
        navigate('/'); // Redirige al homepage después de la actualización
      }).catch((error) => {
        console.error('Error updating plato:', error);
        toast.error('Error al actualizar el plato');
      });
    } else {
      // Crear un nuevo plato
      foodService.createReserva(newCatalogo).then((data) => {
        setNewCatalogo({
          nombre: '',
          descripcion: '',
          precio: '',
          imagen: '',
          categoria: '',
        });
        toast.success('Plato creado con éxito');
        navigate('/'); // Redirige al homepage después de la creación
      }).catch((error) => {
        console.error('Error creating plato:', error);
        toast.error('Error al crear el plato');
      });
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <RightSection>
          <label>Nombre</label>
          <input type="text" name="nombre" value={newCatalogo.nombre} onChange={handleChange} />
          <label>Descripción</label>
          <input type="text" name="descripcion" value={newCatalogo.descripcion} onChange={handleChange} />
          <label>Precio</label>
          <input type="number" name="precio" value={newCatalogo.precio} onChange={handleChange} />
          <label>Categoria</label>
          <input type="text" name="categoria" value={newCatalogo.categoria} onChange={handleChange} />
          <label>Imagen</label>
          <input type="text" name="imagen" value={newCatalogo.imagen} onChange={handleChange} />
        </RightSection>
        <button type="submit">{id ? 'Actualizar Plato' : 'Crear Plato'}</button>
      </form>
    </Container>
  );
}

export default CatalogPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
