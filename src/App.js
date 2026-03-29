import './App.css';
import AbdielProfil from './abdielprofil';
import ExaProfil from './ExaProfil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>

        {/* HOME */}
        <Route path="/" element={
          <div className="App">
            <header className="App-header">
              <h1>Project Kelompok 10 🚀</h1>
              <p>Pilih halaman:</p>
              <ul>
                <li>/abdiel-profil</li>
                <li>/exa-profil</li>
              </ul>
            </header>
          </div>
        } />

        {/* PROFIL */}
        <Route path="/abdiel-profil" element={<AbdielProfil />} />
        <Route path="/exa-profil" element={<ExaProfil />} />

      </Routes>
    </Router>
  );
}

export default App;