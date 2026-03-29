import React from 'react';

export default function AbdielProfil() {
    const biodata = {
        nama: "Abdiel",
        umur: 25,
        email: "abdiel@email.com",
        telepon: "+62 812-3456-7890",
        alamat: "Jl. Contoh No. 123, Jakarta",
        pekerjaan: "Developer",
        deskripsi: "Profesional di bidang software development"
    };

    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>{biodata.nama}</h2>
            <p><strong>Umur:</strong> {biodata.umur} tahun</p>
            <p><strong>Email:</strong> {biodata.email}</p>
            <p><strong>Telepon:</strong> {biodata.telepon}</p>
            <p><strong>Alamat:</strong> {biodata.alamat}</p>
            <p><strong>Pekerjaan:</strong> {biodata.pekerjaan}</p>
            <p><strong>Deskripsi:</strong> {biodata.deskripsi}</p>
        </div>
    );
}