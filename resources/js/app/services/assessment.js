import axios from "axios";

export async function delete_assessment_service(id) {
    try {
        const res = await axios.delete(`/api/assessment/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_assessment_service(data) {
    try {
        const res = await axios.post(`/api/update_assessment`, data);
        return res;
    } catch (error) {
        return error;
    }
}
