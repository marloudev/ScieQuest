import axios from "axios";

export async function get_lesson_service() {
    try {
        const res = await axios.get("/api/lesson");
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_lesson_by_id_service(id) {
    try {
        const res = await axios.get(`/api/lesson/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_lesson_service(data) {
    try {
        const res = await axios.post('/api/lesson', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_quest_service(data) {
    try {
        const res = await axios.post('/api/quest', data);
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

export async function update_lesson_service(data) {
    try {
        const res = await axios.post(`/api/update_lesson`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_lesson_service(id) {
    try {
        const res = await axios.delete(`/api/lesson/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}