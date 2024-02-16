import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Job from './components/Job-Page/Job'
import "animate.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/job/:jobId" element={<Job/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
