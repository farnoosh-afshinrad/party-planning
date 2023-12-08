import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme/theme';
import EventBox from './Components/EventBox/EventBox';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EvenType from './Components/EventType/EventType';
import EventSize from './Components/EventSize/EventSize';
import EventForm from './Components/EventForm/EventForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventBox />} />
        <Route path="/party-type" element={<EvenType />} />
        <Route path="/party-size" element={<EventSize />} />
        <Route path="/party-form" element={<EventForm />} />
        // Define other routes as needed
      </Routes>
    </BrowserRouter>
  )
}

export default App
