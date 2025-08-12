const Experience = () => {
    return (
        <section id="experience" className="p-8 glass-container">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                Pengalaman
            </h2>
            <div className="p-6 bg-slate-800 rounded-2xl shadow-lg border border-transparent hover:border-purple-500 transition-all duration-300 ease-in-out">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                        <h3 className="text-xl font-semibold text-white">Magang Administrasi Akademik</h3>
                        <p className="text-sm font-medium text-purple-300">Universitas Muhammadiyah Prof. Dr. Hamka (UHAMKA)</p>
                        <p className="text-xs text-gray-400">Oktober 2021 – April 2022</p>
                    </div>
                    <a href="https://drive.google.com/file/d/1AEYO3r2r2qgvmX-CHOd12RVYtFLU69sr/view?usp=sharing" className="mt-4 sm:mt-0 px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors duration-300">Lihat Sertifikat</a>
                </div>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-400 text-sm">
                    <li>Menyusun Berita Terkini Seputar UHAMKA: Mengembangkan konten informatif dan menarik tentang kegiatan, prestasi, serta pengumuman penting di lingkungan UHAMKA untuk dipublikasikan di situs web resmi, meningkatkan informasi yang tersedia bagi civitas akademika.</li>
                    <li>Mendesain Twibbon dan Poster Kreatif: Membuat desain twibbon dan poster yang menarik untuk mendukung promosi berita serta profil dosen, berkontribusi pada peningkatan engagement dan citra visual UHAMKA.</li>
                    <li>Memastikan Kelayakan Fasilitas Komputer: Melakukan pemeriksaan terhadap komputer yang tersedia di UHAMKA untuk memastikan kondisi perangkat memenuhi standar operasional dan mendukung proses belajar mengajar secara optimal.</li>
                </ul>
            </div>
        </section>
    )
}
export default Experience;