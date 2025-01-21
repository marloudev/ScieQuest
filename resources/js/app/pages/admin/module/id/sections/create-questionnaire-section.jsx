import * as React from "react";

import { router } from "@inertiajs/react";
import { Add, PlusOne } from "@mui/icons-material";
import { Button } from "@mui/material";
// import {
//     get_examinations_thunk,
//     store_examinations_thunk,
// } from "../../_redux/literacy-test-thunk";

export default function CreateQuestionnaireSection() {
    const module_id = window.location.pathname.split("/")[3];

    return (
    <React.Fragment>
            <Button
                variant="outlined"
                onClick={() =>
                    router.visit(`/administrator/modules/${module_id}/create`)
                }
            >
                Create Exercise
            </Button>
        </React.Fragment>
    );
}
