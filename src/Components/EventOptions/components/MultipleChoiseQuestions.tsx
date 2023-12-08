// MultipleChoiceQuestion.tsx
import React from 'react';
import { useQuizStore } from '../../../stores/useQuizStore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface QuestionProps {
    questionId: string;
    question: string;
    options: string[];
    onSelect: () => void;
}

const MultipleChoiceQuestion: React.FC<QuestionProps> = ({
    questionId,
    question,
    options,
    onSelect,
}) => {
    const answer = useQuizStore((state) => state.answers[questionId]);
    const setAnswer = useQuizStore((state) => state.setAnswer);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(questionId, event.target.value);
        onSelect();
    };

    return (
        <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend" sx={{ color:'white', textAlign:'left'}}>{question}</FormLabel>
            <RadioGroup  name={questionId} value={answer || ''} onChange={handleChange}>
                {options.map((option, index) => (
                    <FormControlLabel sx={{ color: 'white', textAlign: 'left', backgroundColor: '#1C1C1C', marginTop: '0.5rem', width:'100%' }} key={index} value={option} control={<Radio />} label={option} />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default MultipleChoiceQuestion;
