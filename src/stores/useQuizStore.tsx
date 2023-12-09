import create from 'zustand';
import { persist}  from 'zustand/middleware';

interface QuizState {
    answers: { [questionId: string]: string | null };
    setAnswer: (questionId: string, answer: string | null) => void;
}

export const useQuizStore = create<QuizState>(persist(
    (set) => ({
        answers: {},
        setAnswer: (questionId, answer) =>
            set((state) => ({
                answers: { ...state.answers, [questionId]: answer },
            })),
    }),
    {
        name: 'quiz-store',
        getStorage: () => localStorage,
    }
));
