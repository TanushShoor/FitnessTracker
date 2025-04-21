
import Dashboard from './pages/Dashboard';
import About from './pages/about';
import History from './pages/History';
import AddWorkout from './pages/AddWorkout';
import React from 'react';
import Header from './Header';
import Home from './pages/home';
import { Route, Routes} from 'react-router-dom';  
import './styles.css';

import { WorkoutProvider } from './WorkoutContext';

function App() {
  console.log(window.location);
  return (
    <WorkoutProvider>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/addworkout" element={<AddWorkout />} />
        </Routes>
      </div>
    </WorkoutProvider>
  );
}

export default App;
