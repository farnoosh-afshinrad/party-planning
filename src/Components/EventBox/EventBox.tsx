import React from 'react';
import { Box, Button } from '@mui/material';

const EventBox: React.FC = () => {

    const handleNavigate = () => {
        console.log('test');

    };

    return (
        <>
            <Box
                display="flex" justifyContent="space-between" alignItems="center"
                sx={{
                    height: '30%', // Set the height of the box
                    width: '100%', // Set the width of the box
                    backgroundImage: 'linear-gradient(to right, #50586A, #1E2530)', // Grey gradient
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
                <Box display="flex" justifyContent="center" p={2}>
                    <Button variant="contained" color="primary"
                        sx={{
                            height: "30%"
                        }}
                        onClick={handleNavigate}>
                        Go 
                    </Button>
                </Box>
            </Box>

        </>

    );
};

export default EventBox;