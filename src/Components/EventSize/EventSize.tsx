import React from 'react';
import { Box, Card, Grid, LinearProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EventSize: React.FC = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/party-form')
    }

    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={20} sx={{ marginBottom: 2 }} />
            <Typography color='white' textAlign='left' margin='15px'>
                What is the occassion?
            </Typography>
            <Grid container spacing={2}>
                {['small', 'medium', 'large'].map((size) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={size}>
                        <Card variant="outlined" sx={{ padding: 2, textAlign: 'center', backgroundColor: "#1C1C1C", color: 'purple', cursor: 'pointer' }}
                            onClick={handleNavigate}
                        >
                            <Typography variant="h5" >{size}</Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default EventSize;