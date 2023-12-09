import { Button, Typography } from "@mui/material";
import { StyledEventBox } from "./StyledEventBox";
import Box from "@mui/material/Box";
import { differenceInDays } from 'date-fns';
import useEventDateState from "../../../stores/useEventDateState";
import { useNavigate } from "react-router-dom";

const UpcommingEvents: React.FC = () => {
    const upcomingEvents = useEventDateState(state => state.upcomingEvents)
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
                <StyledEventBox onClick={navigateToToDO}>
                    <Typography textAlign={"left"} color='white' sx={{ fontStyle: 'bold', fontSize: '2rem', paddingX: '2rem', paddingTop: '2rem' }} >{upcomingEvents[upcomingEvents.length - 1]?.text} </Typography>
                    <Typography textAlign={"left"} color='white' sx={{ fontStyle: 'italic', fontSize: '1rem', paddingX: '2rem' }}>{differenceInDays(new Date(upcomingEvents[upcomingEvents.length - 1]?.date), now)} Days To Go</Typography>
                </StyledEventBox>
            </>}
            {upcomingEvents.length === 0 && <>
                <StyledEventBox display="flex" justifyContent="space-around" alignItems='center'>
                    <Button variant="contained" color="primary"
                        sx={{
                            height: "30%"
                        }}
                        onClick={handleNavigate}>
                        CREATE A NEW EVANT
                    </Button>
                </StyledEventBox>
            </>}
          
        </>

    )

}

export default UpcommingEvents;