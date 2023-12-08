import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useEventDateState from '../../stores/useEventDateState';
import UpcommingEvents from './components/UpcommingEvents';
import { StyledEventBox } from './components/StyledEventBox';
import PassedEvents from './components/passedEvents';

const EventBox: React.FC = () => {
    const pastEvents = useEventDateState(state => state.pastEvents);

    const navigate = useNavigate();


    const handleNavigate = () => {
        navigate('/party-type');
    };

    return (
        <>
            <UpcommingEvents />
            <PassedEvents/>
            {/* <Box
                display="flex" justifyContent="space-between" alignItems="center"
                sx={{
                    height: '28%', 
                    width: '100%', 
                    backgroundImage: 'linear-gradient(to right, #50586A, #1E2530)',
                    borderRadius: '5px'
                }}
            >
                <Box display="flex" justifyContent="center" p={2}>
                    <Button variant="contained" color="primary"
                        sx={{
                            height: "30%"
                        }}
                        onClick={handleNavigate}>
                        CREATE A NEW EVANT
                    </Button>
                </Box>
            </Box> */}

        </>

    );
};

export default EventBox;