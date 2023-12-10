import {  Typography, Card, Grid } from "@mui/material";
import useEventDateState from "../../../stores/useEventDateState";

const PassedEvents: React.FC = () => {
    const pastEvents = useEventDateState(state => state.pastEvents);

    return (
        <>
            <Typography variant="h5" textAlign='left' color='white' sx={{ marginTop: '2rem', padding: '0.5rem' }}>Previous House Parties</Typography>
            <Grid container spacing={2}>
                {pastEvents.map((evant) => (
                    <Grid item xs={12} sm={9} md={7} lg={5} >
                        <Card variant="outlined" sx={{ padding: 2, textAlign: 'center', backgroundColor: "#1C1C1C", color: 'white', cursor: 'pointer' }}
                        >
                            <Typography textAlign='left' sx={{fontStyle:'bold'}} >{evant.text}</Typography>
                            <Typography textAlign={"left"} color='white' sx={{ fontStyle: 'italic', fontSize: '0.7rem' }}>{evant?.date}</Typography>
                            <Typography textAlign={"left"} color='white' sx={{ fontStyle: 'italic', fontSize: '0.7rem' }}>{evant?.time}</Typography>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>

    )

}

export default PassedEvents;