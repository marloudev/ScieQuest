import React from "react";
import AdminLayout from "../../../layout";
import CreateQuestionnaireSection from "./sections/create-questionnaire-section";
import QuestionnaireCardSection from "./sections/questionnaire-card-section";
import { useEffect } from "react";
import store from "@/app/pages/store/store";
import {
    get_questionnaires_by_id_thunk,
    get_questionnaires_thunk,
    get_specifications_by_id_thunk,
} from "../../_redux/questionaires-thunk";
import QuestionnaireTabsSection from "./sections/questionnaire-tabs-section";
import CreateSpecificationSection from "./sections/create-specification-section";
import SpecificationCardSection from "./sections/specification-card-section";

export default function LiteracyTestIDPage() {
    const examination_id = window.location.pathname.split("/")[4];
    useEffect(() => {
        store.dispatch(get_questionnaires_by_id_thunk(examination_id));
        store.dispatch(get_specifications_by_id_thunk(examination_id));
    }, []);
    return (
        <AdminLayout>
            <QuestionnaireTabsSection
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
            />
        </AdminLayout>
    );
}
