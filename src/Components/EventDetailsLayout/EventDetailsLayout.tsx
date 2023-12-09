import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MainHeader from '../MainHeader/MainHeader';

interface LayoutProps {
    children: ReactNode;
    disabled?: boolean | false;
    handleNextBtn: () => void;
}

const EventDetailsLayout: React.FC<LayoutProps> = ({ children, handleNextBtn, disabled }) => {
    return (
        <>
            <MainHeader/>
            <Box display="flex" flexDirection="column" justifyContent="space-between" height="90%">
                <Box>
                    {children}
                </Box>
                <Box mt={2}>
                    <Button variant="contained" fullWidth disabled={disabled} onClick={handleNextBtn} color="primary" sx={{
                        height: "3rem", '&.Mui-disabled': {
                            backgroundColor: '#6699CC', 
                            color: '#666' 
                        }
                    }}>
                        Next
                    </Button>
                </Box>
            </Box>
        </>

    );
};

export default EventDetailsLayout;