import create from 'zustand';
import { persist } from 'zustand/middleware';
import { defaultTasks } from '../utils/defaultTasks';

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    tasks: Task[];
    addTask: (text: string) => void;
    toggleTask: (id: number) => void;
}

export const useTodoTaskStore = create<TaskState>(persist(
    (set) => ({
        tasks: defaultTasks,
        addTask: (text) => set((state) => ({
            tasks: [...state.tasks, { id: Date.now(), text, completed: false }],
        })),
        toggleTask: (id) => set((state) => ({
            tasks: state.tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        })),
    }),
    {
        name: 'todo-storage',
    }
));
