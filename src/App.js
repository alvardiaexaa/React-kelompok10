exa-profil
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExaProfil from './ExaProfil';

import logo from './logo.svg';
import './App.css';
import AbdielProfil from './abdielprofil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 master

function App() {
  return (
    <Router>
exa-profil
      <Routes>
        {/* Akses halaman ini di localhost:3000/exa-profil */}
        <Route path="/exa-profil" element={<ExaProfil />} />
        
        {/* Halaman Utama */}
        <Route path="/" element={
          <div className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-indigo-600">Project Kelompok 10</h1>
            <p className="mt-2 text-gray-500 font-medium">Ketik <span className="text-red-500">/exa-profil</span> pada alamat URL browser Anda</p>
          </div>
        } />

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
master
      </Routes>
    </Router>
  );
}

export default App;