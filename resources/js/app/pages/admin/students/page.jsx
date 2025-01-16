import React from "react";
import AdminLayout from "../layout";
import TableSection from "./sections/table-section";
// import CreateSection from './sections/create-section'
import PaginationSection from "./sections/pagination-section";
import SearchSection from "./sections/search-section";
import { useEffect } from "react";
import store from "../../store/store";
import { get_students_thunk } from "./redux/students-thunk";
import CreateSection from "./sections/create-section";

export default function StudentsPage() {
    useEffect(() => {
        store.dispatch(get_students_thunk());
    }, []);
    return (
        <AdminLayout>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    {/* <CreateSection /> */}
                    <SearchSection />
                </div>
                <div className="flex flex-col items-center justify-between h-[82vh] w-full">
                    <div className="w-full flex flex-col gap-3">
                        <CreateSection />
                        <TableSection />
                    </div>
                    <PaginationSection />
                </div>
            </div>
        </AdminLayout>
    );
}
