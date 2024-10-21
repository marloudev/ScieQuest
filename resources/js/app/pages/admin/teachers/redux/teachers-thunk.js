import { store_teachers_service, delete_teachers_service, update_teachers_service, get_teachers_by_id_service, get_teachers_service } from "@/app/services/teachers-service";
import { teachersSlice } from "./teachers-slice";
import { search_students_service } from "@/app/services/user-service";



export function search_students_thunk(data) {
  return async function (dispatch, getState) {
    const res = await search_students_service(data)
    dispatch(teachersSlice.actions.setStudents(res.response));
    return res
  };
}

export function get_teachers_thunk() {
  return async function (dispatch, getState) {
    const res = await get_teachers_service()
    dispatch(teachersSlice.actions.setTeachers(res.data.response));
    return res
  };
}

export function get_teachers_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = get_teachers_by_id_service(id)
    return res
  };
}

export function store_teachers_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_teachers_service(data)
    return res
  };
}

export function update_teachers_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_teachers_service(data)
    return res
  };
}

export function delete_teachers_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_teachers_service(id)
    return res
  };
}
