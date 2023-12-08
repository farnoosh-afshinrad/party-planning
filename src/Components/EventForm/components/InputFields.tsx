import { useEffect } from 'react';
import {Button} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useForm, Controller } from 'react-hook-form';
import useInputStore from '../../../stores/useInputStore';
import { StyledTextField } from './StyledTextField'
import { useNavigate } from 'react-router-dom';

interface FormData {
    text: string;
    date: string;
    time: string;
    number: string;
}


const InputFields = () => {
    
    const { control, reset } = useForm<FormData>();
    const { values, setValues } = useInputStore();
    const navigate = useNavigate();

    useEffect(() => {
        reset(values); 
    }, [reset, values]);

    const handleNavigate = () => {
        navigate('/party-details/email')
    }

    return (
        <form>
            <FormControl fullWidth variant="standard">
                {Object.entries(values).map(([key, value]) => (
                    <Controller
                        key={key}
                        name={key as keyof FormData}
                        control={control}
                        defaultValue={value}
                        render={({ field }) => (
                            <>
                                <label htmlFor={key} style={{ color: 'white', textAlign: 'left' }} >{key}</label>
                                <StyledTextField fullWidth
                                    {...field}
                                    type={key}
                                    variant="outlined"
                                    margin="normal"
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setValues({ [key]: e.target.value });
                                    }}
                                     />
                            </>
                        )}
                    />

                ))}
            </FormControl>

        </form>
    );
};

export default InputFields;