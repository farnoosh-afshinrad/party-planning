import React from 'react';
import InputFields from './components/InputFields';
import { Box, LinearProgress } from '@mui/material';
import EventDetailsLayout from '../EventDetailsLayout/EventDetailsLayout';
import { useNavigate } from 'react-router-dom';

const EventForm: React.FC = () => {
    const navigate = useNavigate()

    const navigateToQuizeEmail = () => {
        navigate('/party-details/q1')
    }

    return (
        <EventDetailsLayout handleNextBtn={navigateToQuizeEmail}>
            <Box sx={{ width: '100%' }} >
                <LinearProgress variant="determinate" value={30} sx={{ marginBottom: 2 }} />
                <InputFields />
            </Box>
        </EventDetailsLayout>
 
    );
};

export default EventForm;