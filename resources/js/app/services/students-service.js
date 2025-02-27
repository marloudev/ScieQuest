import axios from "axios";

export async function get_student_score_service() {
    try {
        const res = await axios.get(`/api/get_student_score/` + window.location.pathname.split('/')[3]);
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_student_score_by_pupil_id_service() {
    try {
        const res = await axios.get(`/api/get_student_score_by_pupil_id/` + window.location.pathname.split('/')[3]);
        return res;
    } catch (error) {
        return error;
    }
}

export async function get_students_service(user_type) {
    try {
        const res = await axios.get(`/api/students` + window.location.search);
        return res;
    } catch (error) {
        return error;
    }
}



export async function get_students_by_id_service(teacher_id) {
    try {
        const res = await axios.get(`/api/students/${teacher_id}${window.location.search}`);
        return res;
    } catch (error) {
        return error;
    }
}

export async function store_students_service(data) {
    try {
        const res = await axios.post('/api/students', data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function update_students_service(data) {
    try {
        const res = await axios.put(`/api/students/${data.student_id}`, data);
        return res;
    } catch (error) {
        return error;
    }
}

export async function delete_students_service(id) {
    try {
        const res = await axios.delete(`/api/students/${id}`);
        return res;
    } catch (error) {
        return error;
    }
}