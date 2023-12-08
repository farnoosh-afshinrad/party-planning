import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


export const StyledTextField = styled(TextField)({
    backgroundColor: '#1C1C1C',
    marginTop: '0.5rem',
    marginBottom:'1rem',
    input: {
        color: 'white',
    },
    svg: {
        color: 'white',
    },
    '$ MuiTextField-root': {
        color: 'red'
    },
    '& label.Mui-focused': {
        color: 'withe',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
            color:'red'
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
});