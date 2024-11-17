import axios from "axios";

export async function get_answers_service() {
    try {
        const res = await axios.get("/api/answers");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_answers_by_id_service(id) {
    try {
        const res = await axios.get(`/api/answers/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_answers_service(data) {
    try {
        const res = await axios.post('/api/answers', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_answers_service(data) {
    try {
        const res = await axios.put(`/api/answers/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_answers_service(id) {
    try {
        const res = await axios.delete(`/api/answers/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}