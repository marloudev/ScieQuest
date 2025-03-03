// import { store_booklet_service, delete_booklet_service, update_booklet_service, get_booklet_by_id_service, get_booklet_service, store_exam_type_service, get_exam_type_by_id_service } from "@/app/services/booklet-service";
import { delete_lesson_service } from "@/app/services/lesson-service";
import { update_pre_exercise_service } from "@/app/services/pre-exercise";




export function update_pre_exercise_thunk(data) {
  return async function (dispatch, getState) {
    try {
      const response = await update_pre_exercise_service(data);
      dispatch({ type: 'UPDATE_PRE_EXERCISE', payload: response.data });
      return response.data;
    } catch (error) {
      throw new Error("Failed to update pre_exercise");
    }
  };
}


export function delete_lesson_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_lesson_service(id)
    return res
  };
}

