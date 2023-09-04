import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import BasicInfo from './BasicInfo';
import Survey from './Survey';
import Consultation from './Consultation';
import Confirmation from './Confirmation';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/basic-info" element={<BasicInfo />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
