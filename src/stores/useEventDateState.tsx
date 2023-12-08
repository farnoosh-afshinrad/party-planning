import create from 'zustand';
import { persist } from 'zustand/middleware';
import { isPast } from 'date-fns';

interface Event {
    text: string;
    date: string; // Date in ISO format
    time: string;
    number: string;
}

interface EventState {
    events: Event[];
    upcomingEvents: Event[];
    pastEvents: Event[];
    addEvent: (newEvent: Event) => void;
    categorizeEvents: () => void;
}

const useEventDateState = create<EventState>(
    persist(
        (set, get) => ({
            events: [],
            upcomingEvents: [],
            pastEvents: [],
            addEvent: (newEvent) => {
                set((state) => ({
                    events: [...state.events, newEvent],
                }));
                get().categorizeEvents();
            },
            categorizeEvents: () => {
                const { events } = get();
                const upcoming = events.filter(event => !isPast(new Date(event.date)));
                const past = events.filter(event => isPast(new Date(event.date)));

                set(() => ({
                    upcomingEvents: upcoming,
                    pastEvents: past,
                }));
            },
        }),
        {
            name: 'event-storage',
            getStorage: () => localStorage,
        }
    )
);

export default useEventDateState;
