import { store_booklet_service, delete_booklet_service, update_booklet_service, get_booklet_by_id_service, get_booklet_service, store_exam_type_service, get_exam_type_by_id_service } from "@/app/services/booklet-service";
import { bookletSlice } from "./booklet-slice";
import { get_examinations_by_id_service } from "@/app/services/examinations-service";
import { delete_module_service, get_module_by_id_service, get_module_service, store_module_service, update_module_service } from "@/app/services/module-service";



export function get_module_thunk() {
  return async function (dispatch, getState) {
    // dispatch(appSlice.actions.incrementByAmount(10));
    const res = await get_module_service()
    dispatch(bookletSlice.actions.setBooklets(res.data.data));
    return res
  };
}

export function get_module_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = await get_module_by_id_service(id)
    dispatch(bookletSlice.actions.setBooklet(res.data.data));
    return res
  };
}

export function store_module_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_module_service(data)
    return res
  };
}

export function store_exam_type_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_exam_type_service(data)
    return res
  };
}

export function get_exam_type_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = await get_exam_type_by_id_service(id)
    dispatch(bookletSlice.actions.setExamTypes(res.data.data));
    return res
  };
}


export function update_booklet_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_booklet_service(data)
    return res
  };
}

export function update_module_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_module_service(data)
    return res
  };
}

export function delete_module_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_module_service(id)
    return res
  };
}


export function get_examinations_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = await get_examinations_by_id_service(id)
    console.log('waaaa', res.data.response)
    dispatch(bookletSlice.actions.setExaminations(res.data.response));
    return res
  };
}