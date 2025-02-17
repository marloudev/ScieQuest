import axios from "axios";

export async function get_questionnaires_service() {
    try {
        const res = await axios.get("/api/questionnaires");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_questionnaires_by_id_service(id) {
    try {
        const res = await axios.get(`/api/questionnaires/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_questionnaires_service(data) {
    try {
        const res = await axios.post('/api/questionnaires', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_questionnaires_service(data) {
    try {
        const res = await axios.put(`/api/quest/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_questionnaires_service(id) {
    try {
        const res = await axios.delete(`/api/quest/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}