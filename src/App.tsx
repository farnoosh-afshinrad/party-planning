import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme/theme';
import EventBox from './Components/EventBox/EventBox';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EvenType from './Components/EventType/EventType';
import EventSize from './Components/EventSize/EventSize';
import EventForm from './Components/EventForm/EventForm';
import EventOptions from './Components/EventOptions/EventOptions';
import { questions } from './utils/questions';
import EventTodos from './Components/EventTodos/EventTodos';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventBox />} />
        <Route path="/party-type" element={<EvenType />} />
        <Route path="/party-size" element={<EventSize />} />
        <Route path="/party-form" element={<EventForm />} />
          {questions.map((question) => (
            <Route key={question.id} path={`/party-details/${question.id}`} element={<EventOptions questionId={question.id} />} />
          ))}
        <Route path='/party/to-do' element={<EventTodos/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
