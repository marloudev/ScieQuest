import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import DeleteSpecificationSection from './delete-specification-section';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function SpecificationCardSection() {
    const { specifications } = useSelector((store) => store.questionnaires);
    return (
        <div className='flex flex-col gap-4'>
            {
                specifications.data.map((res, i) => {
                    return <Card key={i} sx={{ minWidth: 275 }}>
                        <CardContent>
                            <div className='flex w-full items-center justify-end'>

                                <DeleteSpecificationSection data={res}/>
                            </div>
                            <Typography variant="body2">
                                {i + 1}. {res.specification}
                            </Typography>
                        </CardContent>
                    </Card>
                })
            }

        </div>
    );
}
