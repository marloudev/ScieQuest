import * as React from "react";
import Button from "@mui/material/Button";


import { router } from "@inertiajs/react";
// import {
//     get_examinations_thunk,
//     store_examinations_thunk,
// } from "../../_redux/literacy-test-thunk";

export default function CreateQuestionnaireSection() {
   
    const module_id = window.location.pathname.split("/")[3];

    return (
        <React.Fragment>
            <Button variant="outlined" 
            onClick={()=>router.visit(`/administrator/modules/${module_id}/create`)}
         >
                Create Questionnaire
            </Button>
        </React.Fragment>
    );
}
