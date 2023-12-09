import create from 'zustand';
import { persist}  from 'zustand/middleware';

interface QuizState {
    answers: { [questionId: string]: string | null };
    setAnswer: (questionId: string, answer: string | null) => void;
    isAnswered: { [questionId: string]: boolean  },
    setIsAnswered: (questionId: string, isAnswered: boolean) => void;
}

export const useQuizStore = create<QuizState>(persist(
    (set) => ({
        answers: {},
        isAnswered:{},
        setAnswer: (questionId, answer) =>
            set((state) => ({
                answers: { ...state.answers, [questionId]: answer },
            })),
        setIsAnswered: (questionId, isAnswered) => set((state) => ({
            isAnswered: {...state.isAnswered, [questionId]: isAnswered }
        }))
    }),
    {
        name: 'quiz-store',
        getStorage: () => localStorage,
    }
));
