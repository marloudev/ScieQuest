import axios from "axios";

export async function get_module_service() {
    try {
        const res = await axios.get("/api/module");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_module_by_id_service(id) {
    try {
        const res = await axios.get(`/api/module/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_module_service(data) {
    try {
        const res = await axios.post('/api/module', data);
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

export async function update_module_service(data) {
    try {
        const res = await axios.put(`/api/module/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_module_service(id) {
    try {
        const res = await axios.delete(`/api/module/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}