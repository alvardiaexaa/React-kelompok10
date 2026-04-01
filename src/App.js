import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ExaProfil from './ExaProfil';
import AbdielProfil from './AbdielProfil';
import HafizhProfil from './hafizhprofil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="flex flex-col items-center justify-center min-h-screen p-10">
            <h1 className="text-4xl font-bold text-pink-600 mb-10">Website React Kelompok 10</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">

              <Link to="/exa-profil" className="p-6 bg-white shadow-lg rounded-2xl hover:scale-105 transition-transform text-center font-bold text-pink-500 border-2 border-pink-100">
                Profil Angelique Exa Alvardia
              </Link>

              <Link to="/abdiel-profil" className="p-6 bg-white shadow-lg rounded-2xl hover:scale-105 transition-transform text-center font-bold text-blue-500 border-2 border-blue-100">
                Profil Abdiel Rayman Carlitos
              </Link>

              <Link to="/hafizh-profil" className="p-6 bg-white shadow-lg rounded-2xl hover:scale-105 transition-transform text-center font-bold text-green-500 border-2 border-green-100">
                Profil Hafizh Wafi Awadya
              </Link>

            </div>
          </div>
        } />

        <Route path="/exa-profil" element={<ExaProfil />} />
        <Route path="/abdiel-profil" element={<AbdielProfil />} />
        <Route path="/hafizh-profil" element={<HafizhProfil />} />

      </Routes>
    </Router>
  );
}

export default App;