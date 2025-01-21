import * as React from "react";


import { router } from "@inertiajs/react";
import { Add, PlusOne } from "@mui/icons-material";
// import {
//     get_examinations_thunk,
//     store_examinations_thunk,
// } from "../../_redux/literacy-test-thunk";

export default function CreateQuestionnaireSection() {

    const module_id = window.location.pathname.split("/")[3];

    return (
        <React.Fragment>
            <button
                type="button"
                onClick={() => router.visit(`/administrator/modules/${module_id}/create`)}
                className=" flex  items-center justify-center text-lg p-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-sans">
                <Add />
                <b>Create Questionnaire</b>
            </button>
        </React.Fragment>
    );
}
