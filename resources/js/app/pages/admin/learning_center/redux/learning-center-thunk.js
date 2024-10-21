import { delete_learning_centers_service, get_learning_centers_by_id_service, get_learning_centers_service, store_learning_centers_service, update_learning_centers_service } from "@/app/services/learning-centers";


export function get_learning_centers_thunk() {
  return async function (dispatch, getState) {
    // dispatch(appSlice.actions.incrementByAmount(10));
    const res = get_learning_centers_service()
    return res
  };
}

export function get_learning_centers_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = get_learning_centers_by_id_service(id)
    return res
  };
}

export function store_learning_centers_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_learning_centers_service(data)
    return res
  };
}

export function update_learning_centers_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_learning_centers_service(data)
    return res
  };
}

export function delete_learning_centers_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_learning_centers_service(id)
    return res
  };
}
