import store from "@/app/pages/store/store";
import { Delete, DeleteOutline } from "@mui/icons-material";
import {
    Box,
    Button,
    CircularProgress,
    Modal,
    Tooltip,
    Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import {
    delete_questionnaires_thunk,
    get_questionnaires_by_id_thunk,
    get_questionnaires_thunk,
} from "../../../literacy_test/_redux/questionaires-thunk";
import { get_module_by_id_thunk } from "../../redux/booklet-thunk";
import { delete_assessment_service } from "@/app/services/assessment";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
export default function DeleteAssessmentSection({ data }) {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const module_id = window.location.pathname.split("/")[3];
    console.log('dadwkjlawkjdlawkwda',data)
    async function delete_data(params) {
        setLoading(true);
        try {
            await delete_assessment_service(data.id)
            await store.dispatch(get_module_by_id_thunk(module_id));
            setOpen(false);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    async function closed(params) {
        setOpen(false);
    }

    return (
        <>
            <Tooltip title="Delete Test">
                <Button
                    onClick={() => setOpen(!open)}
                    variant="text"
                    color="error"
                >
                    <Delete />
                </Button>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Delete Assessment
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to delete this test?
                    </Typography>
                    <div className="flex gap-2.5">
                        <div className="flex w-full pt-5 items-center justify-end">
                            <Button
                                color="error"
                                onClick={delete_data}
                                //   disabled={loading}
                                variant="contained"
                                className=" w-full"
                            >
                                {loading ? (
                                    <CircularProgress
                                        size={24}
                                        color="inherit"
                                    />
                                ) : (
                                    "Delete"
                                )}
                            </Button>
                        </div>
                        <div className="flex w-full pt-5 items-center justify-end">
                            <Button
                                color="primary"
                                onClick={closed}
                                variant="contained"
                                className=" w-full"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
}
