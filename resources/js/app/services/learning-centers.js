import axios from "axios";

export async function get_learning_centers_service() {
    try {
        const res = await axios.get("/api/learning_centers");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_learning_centers_by_id_service(id) {
    try {
        const res = await axios.get(`/api/learning_centers/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_learning_centers_service(data) {
    try {
        const res = await axios.post('/api/learning_centers', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_learning_centers_service(data) {
    try {
        const res = await axios.put(`/api/learning_centers/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_learning_centers_service(id) {
    try {
        const res = await axios.delete(`/api/learning_centers/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}