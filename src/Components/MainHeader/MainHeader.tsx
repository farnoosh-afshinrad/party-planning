import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

interface MainHeaderProps {
    title?: string, 
}

const MainHeader: React.FC<MainHeaderProps> = ({title}) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <Box display='flex' gap='1rem' alignItems='center' sx={{marginBottom: '1rem' }}>
            <ArrowBackIcon sx={{color:'white'}} onClick={goBack} />
            <Typography color='white' sx={{ fontSize: '1rem', fontStyle: 'bold' }}>
                {title ? title : 'Create New Evant'}
            </Typography>

        </Box>
    );
}

export default MainHeader;