import React, { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import theme from '../theme/theme';


const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex" justifyItems="center"
                sx={{
                    width: {
                        xs: '100%', // Full width on extra-small screens
                        sm: 440,    // 440px width starting from small screens
                        md: '90%',
                        lg: '80%'
                    },
                    height: '100%', // Height of 100% of the viewport
                    margin: '0 ', // Centering the box horizontally
                    overflow: 'auto', // Add scroll if content overflows
                    backgroundColor: 'black',
                    padding: {
                        xs: '1rem', // Smaller padding on extra-small screens
                        md: '3rem'  // Larger padding from medium screens upwards
                    },
                }}
            >
                {children}
            </Box>

        </ThemeProvider>

    );
};

export default Layout;