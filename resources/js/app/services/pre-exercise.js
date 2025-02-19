import axios from "axios";

export async function delete_pre_exercise_service(id) {
    try {
        const res = await axios.delete(`/api/pre_exercise/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}
