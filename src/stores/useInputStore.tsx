import create from 'zustand';
import { persist } from 'zustand/middleware';

interface InputState {
    values: {
        text: string;
        date: string;
        time: string;
        number: string;
    };
    setValues: (newValues: Partial<InputState['values']>) => void;
}

const useInputStore = create<InputState>(
    persist(
        (set) => ({
            values: {
                text: '',
                date: '',
                time: '',
                number: '',
            },
            setValues: (newValues) =>
                set((state) => ({ values: { ...state.values, ...newValues } })),
        }),
        {
            name: 'input-form-storage',
            getStorage: () => localStorage,
        }
    )
);

export default useInputStore;