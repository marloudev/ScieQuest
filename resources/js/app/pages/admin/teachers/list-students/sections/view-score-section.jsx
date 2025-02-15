import { router } from '@inertiajs/react';
import { Preview, ViewCozyTwoTone } from '@mui/icons-material'
import { Button, Tooltip } from '@mui/material'
import React from 'react'
import { useState } from 'react';

export default function ViewScoreSection({ data }) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Tooltip title="View Student Score and Progress">
                <Button
                    onClick={() => window.open(`/teacher/score/${data.id}`, '_blank')}
                    size="small"
                    variant="contained"
                    color="success">
                    <Preview />
                </Button>
            </Tooltip>
        </div>
    )
}
