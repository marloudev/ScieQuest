// import { store_booklet_service, delete_booklet_service, update_booklet_service, get_booklet_by_id_service, get_booklet_service, store_exam_type_service, get_exam_type_by_id_service } from "@/app/services/booklet-service";

import { update_assessment_service } from "@/app/services/assessment";


export function update_assessment_thunk(data) {
  return async function (dispatch, getState) {
    try {
      const response = await update_assessment_service(data);
      dispatch({ type: 'UPDATE_ASSESSMENT', payload: response.data });
      return response.data;
    } catch (error) {
      throw new Error("Failed to update assessment");
    }
  };
}
