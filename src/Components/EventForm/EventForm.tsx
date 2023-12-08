import React from 'react';
import InputFields from './components/InputFields';
import { Box, LinearProgress } from '@mui/material';
import EventDetailsLayout from '../EventDetailsLayout/EventDetailsLayout';
import { useNavigate } from 'react-router-dom';
import useInputStore from '../../stores/useInputStore';
import useEventDateState from '../../stores/useEventDateState';

const EventForm: React.FC = () => {
    const { values } = useInputStore();
    const addEvent = useEventDateState((state) => state.addEvent);

    const navigate = useNavigate()

    const navigateToQuizeEmail = () => {
        addEvent(values)
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