import React from 'react';
import useEventDateState from '../../stores/useEventDateState';
import UpcommingEvents from './components/UpcommingEvents';
import PassedEvents from './components/PassedEvents';

const EventBox: React.FC = () => {
    const pastEvents = useEventDateState(state => state.pastEvents);
    const upcomingEvents = useEventDateState(state => state.upcomingEvents)    

    return (
        <>
            { upcomingEvents &&  <UpcommingEvents />}
            { pastEvents && <PassedEvents />}
        </>

    );
};

export default EventBox;