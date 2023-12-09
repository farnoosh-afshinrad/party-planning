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
                        xs: '100%',
                        sm: 440,   
                        md: '90%',
                        lg: '80%'
                    },
                    height: '100%',
                    margin: '0 ', 
                    overflow: 'auto', 
                    backgroundColor: 'black',
                    padding: {
                        xs: '1rem', 
                        md: '3rem'  
                    },
                }}
            >
                {children}
            </Box>

        </ThemeProvider>

    );
};

export default Layout;