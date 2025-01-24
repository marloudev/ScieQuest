import React from "react";
import AdminLayout from "../../layout";
import CreateQuestionnaireSection from "./sections/create-questionnaire-section";
import QuestionnaireCardSection from "./sections/questionnaire-card-section";
import { useEffect } from "react";
import store from "@/app/pages/store/store";

import AssessmentCardSection from "./sections/assessment-card-section";
import CreateLessonSection from "./sections/create-lesson-section";
import { get_module_by_id_thunk } from "../redux/booklet-thunk";

export default function LiteracyTestIDPage() {
    const module_id = window.location.pathname.split("/")[3];
    useEffect(() => {
        store.dispatch(get_module_by_id_thunk(module_id));
    }, []);
    return (
        <AdminLayout>
            <div className="my-3">
                <CreateLessonSection />
            </div>
            <div>
                {/* <QuestionnaireCardSection /> */}
                <AssessmentCardSection />
            </div>
        </AdminLayout>
    );
}
