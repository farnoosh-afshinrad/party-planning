import create from 'zustand';

interface QuizState {
    answers: { [questionId: string]: string | null };
    setAnswer: (questionId: string, answer: string | null) => void;
}

export const useQuizStore = create<QuizState>((set) => ({
    answers: {},
    setAnswer: (questionId, answer) =>
        set((state) => ({
            answers: { ...state.answers, [questionId]: answer },
        })),
}));