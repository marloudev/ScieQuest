import axios from "axios";

export async function get_teachers_service() {
    try {
        const res = await axios.get("/api/teachers");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_teachers_by_id_service(id) {
    try {
        const res = await axios.get(`/api/teachers/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_teachers_service(data) {
    try {
        const res = await axios.post('/api/teachers', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_teachers_service(data) {
    try {
        const res = await axios.put(`/api/teachers/${data.employee_id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_teachers_service(id) {
    try {
        const res = await axios.delete(`/api/teachers/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}