import React from 'react';

const ExaProfil = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden md:flex">
        {/* Foto & Nama */}
        <div className="md:w-1/3 bg-indigo-600 p-8 text-center text-white flex flex-col justify-center items-center">
          <div className="w-32 h-32 bg-indigo-400 rounded-full mb-4 border-4 border-white flex items-center justify-center text-4xl font-bold shadow-lg">
            AE
          </div>
          <h2 className="text-2xl font-bold">Angelique Exa Alvardia</h2>
          <p className="text-indigo-200 mt-2 italic text-sm">Mahasiswa Teknologi Informasi Universitas Brawijaya</p>
        </div>

        {/* Detail Informasi */}
        <div className="md:w-2/3 p-8">
          <h3 className="text-xl font-bold text-gray-800 border-b-2 border-indigo-500 pb-2 mb-4">Biodata Diri</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 mb-6">
            <p><strong>Kelas:</strong> T2B</p>
            <p><strong>Jurusan:</strong> Teknologi Informasi</p>
            <p><strong>Domisili:</strong> Malang</p>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-2">Tentang Saya</h3>
          <p className="text-gray-600 leading-relaxed text-justify text-sm">
            Halo! Nama saya Angelique Exa Alvardia. Saya adalah seorang mahasiswa yang sedang bersemangat mendalami dunia pengembangan web, khususnya menggunakan teknologi React JS. Melalui proyek kelompok ini, saya belajar banyak hal penting seperti manajemen proyek menggunakan Git dan GitHub, serta bagaimana membangun tampilan yang responsif menggunakan Tailwind CSS. Meskipun dalam perjalanannya saya sempat menghadapi beberapa kendala teknis dan error pada sistem, hal tersebut justru membuat saya semakin memahami cara kerja Webpack dan struktur folder React. Saya percaya bahwa setiap baris kode yang saya tulis adalah bagian dari proses belajar untuk menjadi developer yang lebih baik. Fokus utama saya saat ini adalah menciptakan aplikasi web yang tidak hanya fungsional, tetapi juga memiliki antarmuka yang ramah pengguna dan estetis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExaProfil;