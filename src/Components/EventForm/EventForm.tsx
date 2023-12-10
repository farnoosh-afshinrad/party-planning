import React, { useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import { useForm, Controller } from 'react-hook-form';
import { StyledTextField } from './components/StyledTextField';
import { Box, LinearProgress } from '@mui/material';
import EventDetailsLayout from '../EventDetailsLayout/EventDetailsLayout';
import { useNavigate } from 'react-router-dom';
import useInputStore from '../../stores/useInputStore';
import useEventDateState from '../../stores/useEventDateState';
import { fieldtypeToTitle } from '../../utils/fieldtypeToTitle';

interface FormData {
    text: string;
    date: string;
    time: string;
    number: string;
}

const EventForm: React.FC = () => {
    const { control, reset, formState: { isValid } } = useForm<FormData>();
    const { values, setValues } = useInputStore();

    const addEvent = useEventDateState((state) => state.addEvent);

    const navigate = useNavigate()

    useEffect(() => {
        reset(values);
    }, [reset, values]);

    const navigateToQuizeEmail = () => {
        addEvent(values)
        navigate('/party-details/q1')
    }

    return (
        <EventDetailsLayout handleNextBtn={navigateToQuizeEmail} disabled={!isValid}>
            <Box sx={{ width: '100%' }} >
                <LinearProgress variant="determinate" value={30} sx={{ marginBottom: 2 }} />
                <form >
                    <FormControl fullWidth variant="standard">
                        {Object.entries(values).map(([key, value]) => (
                            <Controller
                                key={key}
                                name={key as keyof FormData}
                                control={control}
                                defaultValue={value}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <>
                                        <label htmlFor={key} style={{ color: 'white', textAlign: 'left' }} >{fieldtypeToTitle(key)}</label>
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
            </Box>
        </EventDetailsLayout>

    );
};

export default EventForm;