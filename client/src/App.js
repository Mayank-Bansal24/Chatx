import React from 'react';

import Chat from './components/Chat';
import Join from './components/Join';

import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Join/>} exact />
        <Route path="/Chat" element={<Chat/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
