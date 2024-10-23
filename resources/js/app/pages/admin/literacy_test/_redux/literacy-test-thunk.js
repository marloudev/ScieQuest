import { store_examinations_service, delete_examinations_service, update_examinations_service, get_examinations_by_id_service, get_examinations_service } from "@/app/services/examinations-service";
import { literacyTestSlice } from "./literacy-test-slice";



export function get_examinations_thunk(als_level) {
  return async function (dispatch, getState) {
    // dispatch(appSlice.actions.incrementByAmount(10));
    const res = await get_examinations_service(als_level)
    dispatch(literacyTestSlice.actions.setLiteracyTests(res.data.response));
    return res
  };
}

export function get_examinations_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = get_examinations_by_id_service(id)
    return res
  };
}

export function store_examinations_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_examinations_service(data)
    return res
  };
}

export function update_examinations_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_examinations_service(data)
    return res
  };
}

export function delete_examinations_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_examinations_service(id)
    return res
  };
}
