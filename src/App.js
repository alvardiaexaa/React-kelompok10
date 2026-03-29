import logo from './logo.svg';
import './App.css';
import AbdielProfil from './abdielprofil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/abdielprofil" element={<AbdielProfil />} />
        <Route path="/" element={
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
            </header>
          </div>
        } />

        <Route path="/abdiel-profil" element={<AbdielProfil />} />
      </Routes>
    </Router>
  );
}

export default App;