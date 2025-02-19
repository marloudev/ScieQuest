import axios from "axios";

export async function delete_assessment_service(id) {
    try {
        const res = await axios.delete(`/api/assessment/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}
