import { delete_learning_centers_service, get_learning_centers_by_id_service, get_learning_centers_service, store_learning_centers_service, update_learning_centers_service } from "@/app/services/learning-centers";
import { learningCenterSlice } from "./learning-center-slice";


export function get_learning_centers_thunk() {
  return async function (dispatch, getState) {
    // dispatch(appSlice.actions.incrementByAmount(10));
    const res = await get_learning_centers_service()
    dispatch(learningCenterSlice.actions.setLearningCenters(res.data.response));
    return res
  };
}

export function get_learning_centers_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = await get_learning_centers_by_id_service(id)
    return res
  };
}

export function store_learning_centers_thunk(data) {
  return async function (dispatch, getState) {
    const res = await store_learning_centers_service(data)
    return res
  };
}

export function update_learning_centers_thunk(data) {
  return async function (dispatch, getState) {
    const res = await update_learning_centers_service(data)
    return res
  };
}

export function delete_learning_centers_thunk(id) {
  return async function (dispatch, getState) {
    const res = await delete_learning_centers_service(id)
    return res
  };
}
