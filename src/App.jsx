import './App.css';
import React from 'react'
import GameDetails from './components/GameDetails.jsx'
const App = () => {

  return (
    <div className="App">
      <h1>Welcome to the Baltimore Ravens 2025 - 2026 Schedule</h1>
      <h2>Check out the upcoming games!</h2>
      <GameDetails />
    </div>
  )
}

export default App