import { Delete } from '@mui/icons-material'
import { Box, Button, CircularProgress, Modal, Typography } from '@mui/material'
import React from 'react'
import { delete_examiner_thunk, get_examiner_by_id_thunk } from '../../redux/schedule-thunk'
import store from '@/app/pages/store/store'
import { useState } from 'react'


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

export default function DeleteExaminerSection({ data }) {
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    async function delete_examiner(params) {
        setLoading(true)
        await store.dispatch(delete_examiner_thunk(data.id))
        await store.dispatch(get_examiner_by_id_thunk(window.location.pathname.split('/')[3]))
        setLoading(false)
    }
    return (
        <div>
            <Button
                disable={loading}
                size='small' variant='contained' color='error' onClick={() => setOpen(true)}><Delete /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Delete Examiner
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to delete?
                    </Typography>
                    <div className='flex w-full pt-5 items-center justify-end'>
                        <Button
                            color="error"
                            onClick={delete_examiner}
                            disabled={loading}
                            variant='contained'
                            className=' w-full'>
                            {loading ? <CircularProgress size={24} color="inherit" /> : 'Delete'}
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
