import React from "react";
import AdminLayout from "../../layout";
import CreateExaminationSection from "./_sections/create-examination-section";
import { useEffect } from "react";
import store from "@/app/pages/store/store";
import { get_examinations_thunk } from "../_redux/literacy-test-thunk";
import ExaminationsTableSection from "./_sections/examination-table-section";

export default function LiteracyTestElementaryPage() {
    useEffect(()=>{
        store.dispatch(get_examinations_thunk())
    },[])
    return (
        <AdminLayout>
            <CreateExaminationSection />
            <ExaminationsTableSection />
        </AdminLayout>
    );
}
