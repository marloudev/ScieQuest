import { store_questionnaires_service, delete_questionnaires_service, update_questionnaires_service, get_questionnaires_by_id_service, get_questionnaires_service } from "@/app/services/questionnaires-service";
import { literacyTestSlice } from "./literacy-test-slice";
import { questionnairesSlice } from "./questionaires-slice";
import { delete_specifications_service, get_specifications_by_id_service, store_specifications_service } from "@/app/services/specification-service";



export function get_questionnaires_thunk() {
  return async function (dispatch, getState) {
    // dispatch(appSlice.actions.incrementByAmount(10));
    const res = await get_questionnaires_service()
    dispatch(questionnairesSlice.actions.setQuestionnaires(res.data.response));
    return res
  };
}

export function get_questionnaires_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = await get_questionnaires_by_id_service(id)
    dispatch(questionnairesSlice.actions.setQuestionnaires(res.data.response));
    return res
  };
}

export function store_questionnaires_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_questionnaires_service(data)
    return res
  };
}

export function store_specifications_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_specifications_service(data)
    return res
  };
}

export function get_specifications_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = await get_specifications_by_id_service(id)
    dispatch(questionnairesSlice.actions.setSpecifications(res.data.response));
    return res
  };
}

export function update_questionnaires_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_questionnaires_service(data)
    return res
  };
}

export function delete_questionnaires_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_questionnaires_service(id)
    return res
  };
}

export function delete_specifications_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_specifications_service(id)
    return res
  };
}