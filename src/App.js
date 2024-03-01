
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Home from './components/home';
import Result from './components/result';

function App() {

  return (
    <div className="App">
     <Card>
        <Router>
          <Routes>
            
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      </Card> 
    </div>
  );
}

export default App;
