const API_URL = 'http://localhost:8084/api/cp';

const platoService = {
    async createPlato(data) {
        const response = await fetch(`${API_URL}/crearplato`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },

    async getPlatoById(id) {
        const response = await fetch(`${API_URL}/crearplato/${id}`);
        return response.json();
    },

    async getAllPlato() {
        const response = await fetch(`${API_URL}/crearplato`);
        return response.json();
    },

    async deletePlatoById(id) {
        await fetch(`${API_URL}/crearplato/${id}`, {
            method: 'DELETE',
        });
    },

    async updatePlato(id, data) {
        const response = await fetch(`${API_URL}/crearplato/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    },
}
export default platoService