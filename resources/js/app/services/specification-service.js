import axios from "axios";

export async function get_specifications_service() {
    try {
        const res = await axios.get("/api/specifications");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_specifications_by_id_service(id) {
    try {
        const res = await axios.get(`/api/specifications/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_specifications_service(data) {
    try {
        const res = await axios.post('/api/specifications', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_specifications_service(data) {
    try {
        const res = await axios.put(`/api/specifications/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_specifications_service(id) {
    try {
        const res = await axios.delete(`/api/specifications/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}