import store from '@/app/pages/store/store';
import { Delete } from '@mui/icons-material'
import { Box, Button, CircularProgress, Modal, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import {  delete_specifications_thunk, get_specifications_by_id_thunk } from '../../../literacy_test/_redux/questionaires-thunk';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function DeleteSpecificationSection({ data }) {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const examination_id = window.location.pathname.split("/")[4];

    async function delete_data(params) {
        setLoading(true)
        await store.dispatch(delete_specifications_thunk(data.id))
        store.dispatch(get_specifications_by_id_thunk(examination_id));
        setLoading(false)
        handleClose()
    }
    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                variant="text" color="error">
                <Delete />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Delete Questionnaire
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to delete?
                    </Typography>
                    <div className='flex w-full pt-5 items-center justify-end'>
                        <Button
                            color="error"
                            onClick={delete_data}
                            //   disabled={loading}
                            variant='contained'
                            className=' w-full'>
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Delete'}
                        </Button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}
