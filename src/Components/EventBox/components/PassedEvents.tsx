import {  Typography, Card, Grid } from "@mui/material";
import { StyledEventBox } from "./StyledEventBox";
import Box from "@mui/material/Box";
import { differenceInDays } from 'date-fns';
import useEventDateState from "../../../stores/useEventDateState";

const PassedEvents: React.FC = () => {
    const pastEvents = useEventDateState(state => state.pastEvents);
    const now = new Date();


    return (
        <>
            <Typography variant="h5" textAlign='left' color='white' sx={{ marginTop: '2rem', padding: '0.5rem' }}>Previous House Parties</Typography>
            <Grid container spacing={2}>
                {pastEvents.map((evant) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                        <Card variant="outlined" sx={{ padding: 2, textAlign: 'center', backgroundColor: "#1C1C1C", color: 'white', cursor: 'pointer' }}
                        >
                            <Typography textAlign='left' sx={{fontStyle:'bold'}} >{evant.text}</Typography>
                            <Typography textAlign={"left"} color='white' sx={{ fontStyle: 'italic', fontSize: '0.7rem' }}>{evant.date}</Typography>
                            <Typography textAlign={"left"} color='white' sx={{ fontStyle: 'italic', fontSize: '0.7rem' }}>{evant.time}</Typography>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>

    )

}

export default PassedEvents;