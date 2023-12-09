import React from 'react';
import { Box, Card, Grid, LinearProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainHeader from '../MainHeader/MainHeader';

const EvenType: React.FC = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/party-size')
    }

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <MainHeader />
                <LinearProgress variant="determinate" value={10} sx={{ marginBottom: 2 }} />
                <Typography color='white' textAlign='left' margin='15px'>
                    What is the occassion?
                </Typography>
                <Grid container spacing={2}>
                    {[1, 2, 3, 4, 5].map((number) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={number}>
                            <Card variant="outlined" sx={{ padding: 2, textAlign: 'center', backgroundColor: "#1C1C1C", color: 'purple', cursor: 'pointer' }}
                                onClick={handleNavigate}
                            >
                                <Typography variant="h5" >{number}</Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )


};

export default EvenType;