import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasicInfo from './BasicInfo';
import Survey from './Survey';
import Consultation from './Consultation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/basic-info" element={<BasicInfo />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/consultation" element={<Consultation />} />
      </Routes>
    </Router>
  );
}

export default App;