import { get_schedule_by_id_service, get_schedule_service, store_schedule_service } from "@/app/services/schedule-service";
import { scheduleSlice } from "./schedule-slice";
import { delete_examiner_service, get_examiner_by_examiner_id_service, get_examiner_by_id_service, get_examiner_service, store_examiner_service } from "@/app/services/examiner-service";

export function store_schedule_thunk(data) {
    return async function (dispatch, getState) {
      const res = store_schedule_service(data)
      return res
    };
  }

  export function get_schedule_thunk() {
    return async function (dispatch, getState) {
      const res = await get_schedule_service()
      dispatch(scheduleSlice.actions.setSchedules(res.data.response));
      return res
    };
  }
  
  
  export function get_schedule_by_id_thunk(id) {
    return async function (dispatch, getState) {
      const res = await get_schedule_by_id_service(id)
      dispatch(scheduleSlice.actions.setSchedules(res.data.response));
      return res
    };
  }
  

  export function store_examiner_thunk(data) {
    return async function (dispatch, getState) {
      const res = store_examiner_service(data)
      return res
    };
  }

  export function delete_examiner_thunk(id) {
    return async function (dispatch, getState) {
      const res = delete_examiner_service(id)
      return res
    };
  }


  export function get_examiner_by_id_thunk(id) {
    return async function (dispatch, getState) {
      const res = await get_examiner_by_id_service(id)
      dispatch(scheduleSlice.actions.setExaminers(res.data.response));
      return res
    };
  }
  


  
  export function get_examiner_by_examiner_id_thunk(id) {
    return async function (dispatch, getState) {
      const res = await get_examiner_by_examiner_id_service(id)
      dispatch(scheduleSlice.actions.setExaminers(res.data.response));
      return res
    };
  }