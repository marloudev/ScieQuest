import axios from "axios";

export async function get_examinations_service() {
    try {
        const res = await axios.get("/api/examinations");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_examinations_by_id_service(id) {
    try {
        const res = await axios.get(`/api/examinations/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_examinations_service(data) {
    try {
        const res = await axios.post('/api/examinations', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_examinations_service(data) {
    try {
        const res = await axios.put(`/api/examinations/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_examinations_service(id) {
    try {
        const res = await axios.delete(`/api/examinations/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}