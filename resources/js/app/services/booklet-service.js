import axios from "axios";

export async function get_booklet_service() {
    try {
        const res = await axios.get("/api/booklet");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_booklet_by_id_service(id) {
    try {
        const res = await axios.get(`/api/booklet/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_booklet_service(data) {
    try {
        const res = await axios.post('/api/booklet', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_exam_type_service(data) {
    try {
        const res = await axios.post('/api/exam_type', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_exam_type_by_id_service(id) {
    try {
        const res = await axios.get(`/api/exam_type/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_booklet_service(data) {
    try {
        const res = await axios.put(`/api/booklet/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_booklet_service(id) {
    try {
        const res = await axios.delete(`/api/booklet/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}