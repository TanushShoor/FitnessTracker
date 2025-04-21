import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { BrowserRouter } from 'react-router-dom';
import { WorkoutProvider } from './WorkoutContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <WorkoutProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WorkoutProvider>
)
