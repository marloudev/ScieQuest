import appSlice from "@/app/redux/app-slice";
import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "../admin/dashboard/redux/dashboard-slice";
import settingsSlice from "../admin/settings/redux/settings-slice";
import studentSlice from "../admin/students/redux/student-slice";
import teachersSlice from "../admin/teachers/redux/teachers-slice";

const store = configureStore({
    reducer: {
        app: appSlice,
        dashboard: dashboardSlice,
        teachers: teachersSlice,
        settings: settingsSlice,
        students: studentSlice,
    },
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export default store;
