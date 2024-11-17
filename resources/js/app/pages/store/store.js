import appSlice from "@/app/redux/app-slice";
import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "../admin/dashboard/redux/dashboard-slice";
import settingsSlice from "../admin/settings/redux/settings-slice";
import studentsSlice from "../admin/students/redux/students-slice";
import teachersSlice from "../admin/teachers/redux/teachers-slice";
import literacyTestSlice from "../admin/literacy_test/_redux/literacy-test-slice";
import questionnairesSlice from "../admin/literacy_test/_redux/questionaires-slice";
import scheduleSlice from "../admin/schedule/redux/schedule-slice";
import learningCenterSlice from "../admin/learning_center/redux/learning-center-slice";
import bookletSlice from "../admin/booklet/redux/booklet-slice";

const store = configureStore({
    reducer: {
        app: appSlice,
        dashboard: dashboardSlice,
        teachers: teachersSlice,
        settings: settingsSlice,
        students: studentsSlice,
        literacyTests: literacyTestSlice,
        questionnaires: questionnairesSlice,
        schedule: scheduleSlice,
        learning_centers: learningCenterSlice,
        booklets: bookletSlice
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
