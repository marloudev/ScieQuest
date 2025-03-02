// import { store_booklet_service, delete_booklet_service, update_booklet_service, get_booklet_by_id_service, get_booklet_service, store_exam_type_service, get_exam_type_by_id_service } from "@/app/services/booklet-service";
import { bookletSlice } from "./booklet-slice";
import { get_examinations_by_id_service } from "@/app/services/examinations-service";
import { delete_lesson_service, get_lesson_by_id_service, get_lesson_service, store_lesson_service, store_quest_service, update_lesson_service } from "@/app/services/lesson-service";
import { lessonSlice } from "./lesson-slice";
import { update_pre_exercise_service } from "@/app/services/pre-exercise";



export function get_lesson_thunk() {
  return async function (dispatch, getState) {
    // dispatch(appSlice.actions.incrementByAmount(10));
    const res = await get_lesson_service()
    dispatch(bookletSlice.actions.setBooklets(res.data.data));
    return res
  };
}

export function get_booklet_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = await get_booklet_by_id_service(id)
    dispatch(bookletSlice.actions.setBooklet(res.data.response));
    return res
  };
}

export function store_lesson_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_lesson_service(data)
    return res
  };
}

export function store_quest_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_quest_service(data)
    return res
  };
}
export function store_exam_type_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_exam_type_service(data)
    return res
  };
}

export function get_lesson_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = await get_lesson_by_id_service(id)
    dispatch(lessonSlice.actions.setLessons(res.data.data));
    return res
  };
}


export function update_pre_exercise_thunk(data) {
  return async function (dispatch, getState) {
    try {
      const response = await update_pre_exercise_service(data);
      dispatch({ type: 'UPDATE_LESSON', payload: response.data });
      return response.data;
    } catch (error) {
      throw new Error("Failed to update lesson");
    }
  };
}


export function delete_lesson_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_lesson_service(id)
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