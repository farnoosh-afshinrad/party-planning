import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import MultipleChoiceQuestion from './components/MultipleChoiseQuestions';
import { useQuizStore } from '../../stores/useQuizStore';
import { questions } from '../../utils/questions';
import { LinearProgress } from '@mui/material';
import EventDetailsLayout from '../EventDetailsLayout/EventDetailsLayout';

const EventOptions: React.FC<{ questionId: string }> = ({ questionId }) => {
    const navigate = useNavigate();
    const answer = useQuizStore((state) => state.answers[questionId]);
    const isAnswerNotSelected = answer !== null;
    const currentIndex = questions.findIndex(q => q.id === questionId);    

    console.log(isAnswerNotSelected);
    
    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            // Navigate to the next question
            navigate(`/party-details/${questions[currentIndex + 1].id}`);
        } else {
            navigate('/')
        }
    };

    const currentQuestion = questions.find(q => q.id === questionId);

    return (
        <EventDetailsLayout handleNextBtn={handleNext} disabled=
            {!isAnswerNotSelected}>
            <Box width='100%'>
                <LinearProgress variant="determinate" value={(currentIndex + 1) * 10 + 30} sx={{ marginBottom: 2 }} />
                {currentQuestion && (
                    <MultipleChoiceQuestion
                        questionId={currentQuestion.id}
                        question={currentQuestion.text}
                        options={currentQuestion.options}
                        onSelect={() => { }}
                    />
                )}

            </Box>
        </EventDetailsLayout>
    );
};

export default EventOptions;