import React from 'react';
import InputFields from './components/InputFields';
import { Box, LinearProgress } from '@mui/material';
import EventDetailsLayout from '../EventDetailsLayout/EventDetailsLayout';

const EventForm: React.FC = () => {
    return (
        <EventDetailsLayout>
            <Box sx={{ width: '100%' }} >
                <LinearProgress variant="determinate" value={30} sx={{ marginBottom: 2 }} />
                <InputFields />
            </Box>
        </EventDetailsLayout>
 
    );
};

export default EventForm;