import logo from './logo.svg';
import './App.css';
import AbdielProfil from './abdielprofil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">
        Project Kelompok 10 🚀
      </h1>

      <p className="text-lg text-gray-300 text-center max-w-md">
        Ini adalah aplikasi React sederhana menggunakan Tailwind CSS
      </p>
    </div>
  );
}

export default App;