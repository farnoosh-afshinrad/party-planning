import React from 'react';
import { Box, Card, Grid, LinearProgress, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainHeader from '../MainHeader/MainHeader';
import cake from '../../assets/cake.svg';
import anniversary from '../../assets/anniversary.svg';
import dinner from '../../assets/dinner.svg';
import meetup from '../../assets/meetup.svg';
import other from '../../assets/other.svg';

const EvenType: React.FC = () => {

    const events = [
        { name: 'Birthday', svg: cake },
        { name: 'Anniversary', svg: anniversary },
        { name: 'Dinner', svg: dinner },
        { name: 'Meet up', svg: meetup },
        { name: 'Other', svg: other },
    ];

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
                    {events.map((event) => (
                        <Grid item xs={12} sm={8} md={6} lg={4}>
                            <Card variant="outlined" sx={{ padding: 2, textAlign: 'center', backgroundColor: "#1C1C1C", color: 'purple', cursor: 'pointer' }}
                                onClick={handleNavigate}
                            >
                                <img src={event.svg } />
                                <Typography color='white' sx={{fontSize:'15px', fontStyle:'bold'}} >{event.name}</Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )


};

export default EvenType;