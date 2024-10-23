import React from "react";
import AdminLayout from "../../layout";
import CreateExaminationSection from "./_sections/create-examination-section";
import { useEffect } from "react";
import store from "@/app/pages/store/store";
import { get_examinations_thunk } from "../_redux/literacy-test-thunk";
import ExaminationsTableSection from "./_sections/examination-table-section";

export default function LiteracyTestElementaryPage() {
    useEffect(() => {
        store.dispatch(get_examinations_thunk('Elementary'));
    }, []);
    return (
        <AdminLayout>
            <div className="flex flex-col gap-3">
                <div className="w-1/4">
                    <CreateExaminationSection />
                </div>
                <ExaminationsTableSection />
            </div>
        </AdminLayout>
    );
}
