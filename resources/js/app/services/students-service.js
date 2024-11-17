import axios from "axios";

export async function get_students_service(user_type) {
    try {
        const res = await axios.get(`/api/students`+window.location.search);
        return res;
    } catch (error) {
        return error;
    }
}



export async function get_students_by_id_service(id) {
    try {
        const res = await axios.get(`/api/account/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_students_service(data) {
    try {
        const res = await axios.post('/api/account', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_students_service(data) {
    try {
        const res = await axios.put(`/api/account/${data.id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_students_service(id) {
    try {
        const res = await axios.delete(`/api/account/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}