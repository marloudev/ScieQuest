import axios from "axios";

export async function get_questionaires_service() {
    try {
        const res = await axios.get("/api/questionaires");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_questionaires_by_id_service(id) {
    try {
        const res = await axios.get(`/api/questionaires/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_questionaires_service(data) {
    try {
        const res = await axios.post('/api/questionaires', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_questionaires_service(data) {
    try {
        const res = await axios.put(`/api/questionaires/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_questionaires_service(id) {
    try {
        const res = await axios.delete(`/api/questionaires/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}