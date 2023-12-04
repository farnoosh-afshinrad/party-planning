import { createTheme } from '@mui/material/styles';
import { purple, grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: purple, // This will use the predefined purple colors from Material-UI
        background: {
            default: grey[900], // Dark background
            paper: grey[800],
        },
        mode: 'dark', // This sets the overall color scheme of the theme to dark
    },
    // You can add other theme customizations here
});

export default theme;