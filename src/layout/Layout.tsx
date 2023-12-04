import React, { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <Box
            display="flex" justifyContent="center"
            sx={{
            width: 440, // Width of 440px
            height: '100vh', // Height of 100% of the viewport
            margin: '0', // Centering the box
            overflow: 'auto', // Add scroll if content overflows
                backgroundColor: 'black',
                padding: '3rem'

        }}>
            {children}
        </Box>
    );
};

export default Layout;