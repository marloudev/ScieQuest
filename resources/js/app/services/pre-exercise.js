import axios from "axios";

export async function delete_pre_exercise_service(id) {
    try {
        const res = await axios.delete(`/api/pre_exercise/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_pre_exercise_service(data) {
    try {
        const res = await axios.post(`/api/update_pre_exercise`, data);
        return res;
    } catch (error) {
        return error;
    }
}
