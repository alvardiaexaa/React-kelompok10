import React from 'react';

const ExaProfil = () => {
  return (
    <div className="min-h-screen bg-pink-100 py-16 px-4">
      
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden shadow-pink-200">
        
        <div className="md:flex">
          
          <div className="md:w-2/5 bg-pink-200 p-10 flex flex-col items-center justify-center text-center">
            
            <div className="w-48 h-48 bg-white rounded-full mb-6 border-8 border-white flex items-center justify-center shadow-lg overflow-hidden">
              <img 
                src="https://via.placeholder.com/200" // <-- Ganti link ini dengan link foto aslimu
                alt="Foto Profil Alvardi Exa"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 tracking-tight">Angelique Exa Alvardia</h1>
            <p className="text-pink-700 mt-2 font-semibold text-lg">Mahasiswa Teknologi Informasi Universitas Brawijaya</p>
          </div>

          <div className="md:w-3/5 p-12">
            
            <h3 className="text-4xl font-bold text-pink-600 text-center border-b-4 border-pink-300 pb-4 mb-10 tracking-wider">
              Biodata Diri
            </h3>
            
            <div className="space-y-6 text-black text-xl border-l-8 border-pink-300 pl-6 mb-12 font-medium">
              <p><strong className="text-gray-900">Kelas:</strong> T2B</p>
              <p><strong className="text-gray-900">Jurusan:</strong> Teknologi Informasi</p>
              <p><strong className="text-gray-900">Domisili:</strong> Malang</p>
            </div>

            <h3 className="text-2xl font-semibold text-pink-600 mb-4 border-b-2 border-pink-200 pb-2">
              Tentang Saya
            </h3>        
            <p className="text-gray-700 leading-relaxed text-justify text-lg font-normal">
            Halo! Nama saya Angelique Exa Alvardia. Saya seorang mahasiswa yang sedang mendalami pengembangan web, khususnya menggunakan React JS. Dari proyek kelompok yang saya kerjakan, saya belajar banyak hal, seperti kerja sama tim, penggunaan Git dan GitHub untuk manajemen proyek, serta membuat tampilan website yang responsif dengan Tailwind CSS. Dalam prosesnya, saya sempat mengalami beberapa kendala teknis dan error. Namun, hal itu justru membantu saya lebih memahami cara kerja React, dan struktur folder dalam sebuah project. Pengalaman tersebut juga melatih saya untuk lebih sabar dan terbiasa mencari solusi. Saya percaya bahwa setiap baris kode yang saya tulis adalah bagian dari proses belajar untuk menjadi developer yang lebih baik.
            </p>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12 text-pink-400 text-sm">
        Created by Angelique Exa Alvardia | React Kelompok 10
      </div>
    </div>
  );
};

export default ExaProfil;