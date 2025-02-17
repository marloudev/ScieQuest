import { store_students_service, delete_students_service, update_students_service, get_students_by_id_service, get_students_service, get_student_score_service } from "@/app/services/students-service";
import { studentsSlice } from "./students-slice";
import { store_answers_service } from "@/app/services/answer-service";



export function get_student_score_thunk() {
  return async function (dispatch, getState) {
    const res = await get_student_score_service()
    dispatch(studentsSlice.actions.setStudent(res.data.status));
    return res
  };
}
export function get_students_thunk() {
  return async function (dispatch, getState) {
    const res = await get_students_service()
    dispatch(studentsSlice.actions.setStudents(res.data.response));
    return res
  };
}

export function get_students_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = await get_students_by_id_service(id)
    dispatch(studentsSlice.actions.setStudents(res.data.status));
    return res
  };
}

export function store_students_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_students_service(data)
    return res
  };
}

export function update_students_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_students_service(data)
    return res
  };
}

export function delete_students_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_students_service(id)
    return res
  };
}


// answers

export function store_answers_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_answers_service(data)
    return res
  };
}