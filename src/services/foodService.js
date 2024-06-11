const API_URL = 'http://localhost:8084/api/cp';

const foodService = {
  async createReserva(data) {
    const response = await fetch(`${API_URL}/crearplato`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async getReservaById(id) {
    const response = await fetch(`${API_URL}/crearplato/${id}`);
    return response.json();
  },

  async getAllReservas() {
    const response = await fetch(`${API_URL}/crearplato`);
    return response.json();
  },

  async deleteReservaById(id) {
    await fetch(`${API_URL}/crearplato/${id}`, {
      method: 'DELETE',
    });
  },

  async updateReserva(id, data) {
    const response = await fetch(`${API_URL}/crearplato/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  async partialUpdateReserva(id, data) {
    const response = await fetch(`${API_URL}/crearplato/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

export default foodService;
