import React from "react";
import AdminLayout from "../../layout";
import CreateQuestionnaireSection from "./sections/create-questionnaire-section";
import QuestionnaireCardSection from "./sections/questionnaire-card-section";
import { useEffect } from "react";
import store from "@/app/pages/store/store";

import AssessmentCardSection from "./sections/assessment-card-section";
import { get_exam_type_by_id_thunk } from "../redux/booklet-thunk";

export default function LiteracyTestIDPage() {
    const module_id = window.location.pathname.split("/")[3];
    useEffect(() => {
        store.dispatch(get_exam_type_by_id_thunk(module_id));
    }, []);
    return (
        <AdminLayout>
            {/* <QuestionnaireTabsSection
                tab1={
                    <>
                        <div className="my-3">
                            <CreateQuestionnaireSection />
                        </div>
                        <div>
                            <QuestionnaireCardSection />
                        </div>
                    </>
                }
                tab2={
                    <div className="flex flex-col gap-4">
                        <CreateSpecificationSection />
                        <SpecificationCardSection />
                    </div>
                }
            /> */}
            <div className="my-3">
                <CreateQuestionnaireSection />
            </div>
            <div>
                {/* <QuestionnaireCardSection /> */}
                <AssessmentCardSection />
            </div>
        </AdminLayout>
    );
}
