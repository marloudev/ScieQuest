import appSlice from "@/app/redux/app-slice";
import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "../admin/dashboard/redux/dashboard-slice";
import settingsSlice from "../admin/settings/redux/settings-slice";
import studentsSlice from "../admin/students/redux/students-slice";
import teachersSlice from "../admin/teachers/redux/teachers-slice";

const store = configureStore({
    reducer: {
        app: appSlice,
        dashboard: dashboardSlice,
        teachers: teachersSlice,
        settings: settingsSlice,
        students: studentsSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
