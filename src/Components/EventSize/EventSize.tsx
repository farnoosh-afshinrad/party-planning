import React from 'react';
import { Box, Card, Grid, LinearProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainHeader from '../MainHeader/MainHeader';
import small from '../../assets/small.svg';
import medium from '../../assets/medium.svg';
import large from '../../assets/large.svg'

const EventSize: React.FC = () => {

    const eventSize = [
        { name: 'Small', svg: small, scale: '4 - 20 guests' },
        { name: 'Medium', svg: medium, scale: '20 - 60 guests' },
        { name: 'Large', svg: large, scale: '60 -  guests' },
    ];

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/party-form')
    }

    return (
        <Box sx={{ width: '100%' }}>
            <MainHeader/>
            <LinearProgress variant="determinate" value={20} sx={{ marginBottom: 2 }} />
            <Typography color='white' textAlign='left' margin='15px'>
                What is the size of the guest list?
            </Typography>
            <Grid container spacing={2}>
                {eventSize.map((size) => (
                    <Grid item xs={12} sm={8} md={6} lg={4} >
                        <Card variant="outlined" sx={{ padding: 2, textAlign: 'center', backgroundColor: "#1C1C1C", color: 'purple', cursor: 'pointer', height: '5rem' }}
                            onClick={handleNavigate}
                        >
                            <img src={size.svg} />
                            <Typography color='white' sx={{ fontSize: '15px', fontStyle: 'bold' }} >{size.name}</Typography>
                            <Typography color='white' sx={{ fontSize: '10px', fontStyle: 'italic' }} >{size.scale }</Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default EventSize;