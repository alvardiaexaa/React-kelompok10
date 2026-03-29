import React from 'react';
import fotoHafizh from './fotoHafizh.jpeg'; 

const HafizhProfil = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-16 px-4">
      
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden shadow-blue-200">
        
        <div className="md:flex">
          
          {/* Bagian Kiri: Foto dan Nama */}
          <div className="md:w-2/5 bg-blue-100 p-10 flex flex-col items-center justify-center text-center">
            
            <div className="w-48 h-48 bg-white rounded-full mb-6 border-8 border-white flex items-center justify-center shadow-lg overflow-hidden">
              <img 
                src={fotoHafizh}
                alt="Foto Profil Hafizh"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Hafizh Wafi Awadya</h1>
            <p className="text-blue-700 mt-2 font-semibold text-lg">Mahasiswa Teknologi Informasi</p>
          </div>

          {/* Bagian Kanan: Informasi Biodata */}
          <div className="md:w-3/5 p-12">
            
            <h3 className="text-4xl font-bold text-blue-600 text-center border-b-4 border-blue-200 pb-4 mb-10 tracking-wider">
              Biodata Diri
            </h3>
            
            <div className="space-y-6 text-black text-xl border-l-8 border-blue-300 pl-6 mb-12 font-medium">
              <p><strong className="text-gray-900">Kelas:</strong> T2B</p>
              <p><strong className="text-gray-900">Jurusan/Prodi:</strong> Teknologi Informasi</p>
              <p><strong className="text-gray-900">Domisili:</strong> Madiun</p>
            </div>

            <h3 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-100 pb-2">
              Tentang Saya
            </h3>        
            <p className="text-gray-700 leading-relaxed text-justify text-lg font-normal">
               Halo nama saya Hafizh, meskipun saya Hafizh tapi saya tidak hafal AlQuran.
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12 text-blue-400 text-sm font-medium">
        Created by Hafizh Wafi Awadya | React Kelompok 10
      </div>
    </div>
  );
};

export default HafizhProfil;