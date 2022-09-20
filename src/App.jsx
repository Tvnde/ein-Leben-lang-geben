import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import Waitlist from "./components/waitlist/Waitlist";

const App = () => (
  <Router>
    <div className="app-container">
      <Routes>
        <Route path="/">
          <Route index element={<Waitlist />} />
        </Route>
      </Routes>
    </div>
  </Router>
)

export default App;
