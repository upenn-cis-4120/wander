import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExamplePage from './pages/ExamplePage';
import WelcomePage from './pages/WelcomePage';

function App() {

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<WelcomePage/>} />
          <Route path="/example" element={<ExamplePage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App