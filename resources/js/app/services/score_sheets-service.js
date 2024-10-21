import axios from "axios";

export async function get_score_sheets_service() {
    try {
        const res = await axios.get("/api/score_sheets");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_score_sheets_by_id_service(id) {
    try {
        const res = await axios.get(`/api/score_sheets/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_score_sheets_service(data) {
    try {
        const res = await axios.post('/api/score_sheets', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_score_sheets_service(data) {
    try {
        const res = await axios.put(`/api/score_sheets/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_score_sheets_service(id) {
    try {
        const res = await axios.delete(`/api/score_sheets/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}