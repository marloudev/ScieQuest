import { router } from '@inertiajs/react';
import { Analytics } from '@mui/icons-material'
import { Button, Tooltip } from '@mui/material'
import React from 'react'
import { useState } from 'react';

export default function ViewScoreSection({ data }) {
    const [open, setOpen] = useState(false);

    console.log('dadadadad', data)

    return (
        <div>
            <Tooltip title="View Pupil Score and Progress">
                <Button
                    onClick={() => window.open(`/teacher/score/${data.student_id}`, '_blank')}
                    size="small"
                    variant="contained"
                    color="success">
                    <Analytics />
                </Button>
            </Tooltip>
        </div>
    )
}
