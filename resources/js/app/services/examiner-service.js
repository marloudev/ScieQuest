import axios from "axios";

export async function get_examiner_service() {
    try {
        const res = await axios.get("/api/examiner");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_examiner_by_id_service(id) {
    try {
        const res = await axios.get(`/api/examiner/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_examiner_service(data) {
    try {
        const res = await axios.post('/api/examiner', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_examiner_service(data) {
    try {
        const res = await axios.put(`/api/examiner/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_examiner_service(id) {
    try {
        const res = await axios.delete(`/api/examiner/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_examiner_by_examiner_id_service(id) {
    try {
        const res = await axios.get(`/api/get_examiner_by_examiner_id/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

