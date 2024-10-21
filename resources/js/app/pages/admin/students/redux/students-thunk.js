import { store_students_service, delete_students_service, update_students_service, get_students_by_id_service, get_students_service } from "@/app/services/students-service";
import {studentsSlice} from "./students-slice";



export function get_students_thunk() {
  return async function (dispatch, getState) {
    const res = await get_students_service()
    dispatch(studentsSlice.actions.setStudents(res.data.response));
    return res
  };
}

export function get_students_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = get_students_by_id_service(id)
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
