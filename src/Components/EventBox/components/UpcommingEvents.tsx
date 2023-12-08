import { Button, Typography } from "@mui/material";
import { StyledEventBox } from "./StyledEventBox";
import Box from "@mui/material/Box";
import { differenceInDays } from 'date-fns';
import useEventDateState from "../../../stores/useEventDateState";

const UpcommingEvents: React.FC = () => {
    const upcomingEvents = useEventDateState(state => state.upcomingEvents)
    const now = new Date();


    return (
        <>
            <Box display='flex' justifyItems='center' alignItems='space-between' >
                <Typography variant="h5" textAlign='left' color='white' sx={{ marginTop: '2rem', padding: '0.5rem' }}>Upcommimg</Typography>
                {/* <Button sx={{color:'white'}}>CREATE NEW</Button> */}
            </Box>
            <StyledEventBox>
                {upcomingEvents.map(evant => (
                    <>
                        <Typography textAlign={"left"} color='white' sx={{ fontStyle: 'bold', fontSize: '2rem', paddingX: '2rem', paddingTop: '2rem' }} >{evant.text} </Typography>
                        <Typography textAlign={"left"} color='white' sx={{ fontStyle: 'italic', fontSize: '1rem', paddingX: '2rem' }}>{differenceInDays(new Date(evant.date), now)} Days To Go</Typography>
                    </>
                ))}


            </StyledEventBox>
        </>

    )

}

export default UpcommingEvents;