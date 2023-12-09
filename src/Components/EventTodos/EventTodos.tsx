import React, { useState } from 'react';
import { differenceInDays } from 'date-fns';
import { useTodoTaskStore } from '../../stores/useTodoTasksStore';
import useEventDateState from '../../stores/useEventDateState';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { StyledTextField } from '../EventForm/components/StyledTextField';
import MainHeader from '../MainHeader/MainHeader';

const EventTodos = () => {
    const { tasks, addTask, toggleTask } = useTodoTaskStore();
    const upcomingEvents = useEventDateState(state => state.upcomingEvents)
    const [inputText, setInputText] = useState('');
    const now = new Date();


    const handleAddTask = () => {
        if (inputText.trim() !== '') {
            addTask(inputText);
            setInputText('');
        }
    };
    

    return (
        <>
            <MainHeader title='Checklist'/>
            <Box display='flex' justifyItems='space-between' justifyContent='space-between' alignItems='center' alignContent='center'>
                <Box>
                    <Typography textAlign={"left"} color='white' sx={{ fontStyle: 'bold', fontSize: '1rem', paddingX: '1rem', paddingTop: '2rem' }} >{upcomingEvents[upcomingEvents.length - 1].text} </Typography>
                    <Typography textAlign={"left"} color='white' sx={{ fontStyle: 'italic', fontSize: '0.5rem', paddingX: '1rem' }}>{differenceInDays(new Date(upcomingEvents[upcomingEvents.length - 1].date), now)} Days To Go</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between' alignItems='center' gap='1rem'>
                    <Box display='flex' flexDirection='column' alignItems='space-between' justifyItems='center'>
                        <Typography color='white' textAlign='center'> 
                            {tasks.filter(task => task.completed === true).length} 
                        </Typography>
                        <Typography color='white'>
                             Done
                        </Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='space-between' justifyItems='center'>
                        <Typography color='white' textAlign='center'>
                            {tasks.length}
                        </Typography>
                        <Typography color='white'>
                            To Do
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {tasks.map(task => (
                <Box key={task.id} margin='normal' display='flex' alignItems='center' sx={{ backgroundColor: '#1C1C1C', marginTop:'1rem', padding:'0.4rem' }} >
                    <Checkbox
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                        sx={{color:'white'}}
                    />
                    <Typography color='white' sx={{ color: 'white' }}>{task.text}</Typography>
                    
                </Box>
            ))}

            <Box sx={{marginTop:'2rem'}}>
                <label style={{ color: 'white', textAlign: 'left' }} >New Task</label>
                <StyledTextField value={inputText}
                    fullWidth
                    onChange={(e) => setInputText(e.target.value)}
                />
                <Button fullWidth sx={{ color: 'white' }} onClick={handleAddTask}>Add Task</Button>
            </Box>
        </>
    );
};

export default EventTodos;
