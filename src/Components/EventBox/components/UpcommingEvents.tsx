import { Button, Typography } from "@mui/material";
import { StyledEventBox } from "./StyledEventBox";
import Box from "@mui/material/Box";
import { differenceInDays } from 'date-fns';
import { useTodoTaskStore } from "../../../stores/useTodoTasksStore";
import useEventDateState from "../../../stores/useEventDateState";
import { useNavigate } from "react-router-dom";
import calender from '../../../assets/calender.svg'
import doneCalender from '../../../assets/doneCalender.svg'

const UpcommingEvents: React.FC = () => {
    const upcomingEvents = useEventDateState(state => state.upcomingEvents);
    const { tasks } = useTodoTaskStore();

    const now = new Date();

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/party-type');
    };

    const navigateToToDO = () => {
        navigate('/party/to-do')
    }


    return (
        <>
            {upcomingEvents.length !==0  && <>
                <Box display='flex' alignItems='center' justifyContent={'space-between'} >
                    <Typography variant="h5" textAlign='left' color='white' sx={{ padding: '0.5rem' }}>
                        Upcommimg
                    </Typography>
                    <Button variant="contained" color="primary"
                        sx={{
                            padding: '0.5rem',
                            height: '10%',
                            fontSize: '0.5rem'
                        }}
                        onClick={handleNavigate}>
                        CREATE A NEW EVANT
                    </Button>
                </Box>

                <StyledEventBox onClick={navigateToToDO} display='flex' justifyContent='space-between' alignItems='center' flexWrap='nowrap' >
                    <Box>
                        <Typography textAlign={"left"} color='white' sx={{ fontStyle: 'bold', fontSize: '2rem', paddingX: '2rem', paddingTop: '2rem', }} >{upcomingEvents[upcomingEvents.length - 1]?.text} </Typography>
                        <Typography textAlign={"left"} color='white' sx={{ fontStyle: 'italic', fontSize: '1rem', paddingX: '2rem' }}>{differenceInDays(new Date(upcomingEvents[upcomingEvents.length - 1]?.date), now)} Days To Go</Typography>
                        <Box display='flex' gap='2rem' alignContent='center' sx={{paddingX:'2rem'}}>
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
                    <Box>
                        <img src={doneCalender} />
                    </Box>
    
                </StyledEventBox>
            </>}
            {upcomingEvents.length === 0 && <>
                <StyledEventBox display="flex" justifyContent="space-around" alignItems='center'>
                    <Box>
                        <Typography color='white' sx={{ fontStyle: 'bold', fontSize: '20px' ,margin:'0.5rem' }}>No upcomming house party</Typography>
                        <Typography color='white' sx={{ fontStyle: 'italic', margin: '0.5rem' }}>Plan your house party</Typography>
                        <Button variant="contained" color="primary"
                            sx={{
                                padding: '0.7rem',
                                width:'100%'
                            }}
                            onClick={handleNavigate}>
                            CREATE A NEW EVANT
                        </Button>
                    </Box>
                    <Box>
                        <img src={calender} />
                    </Box>
             
                </StyledEventBox>
            </>}
          
        </>

    )

}

export default UpcommingEvents;