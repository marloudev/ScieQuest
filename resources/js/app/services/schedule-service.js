import axios from "axios";

export async function get_schedule_service() {
    try {
        const res = await axios.get("/api/schedule");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_schedule_by_id_service(id) {
    try {
        const res = await axios.get(`/api/schedule/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_schedule_service(data) {
    try {
        const res = await axios.post('/api/schedule', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_schedule_service(data) {
    try {
        const res = await axios.put(`/api/schedule/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_schedule_service(id) {
    try {
        const res = await axios.delete(`/api/schedule/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}