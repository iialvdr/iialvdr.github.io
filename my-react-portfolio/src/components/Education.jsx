const Education = () => {
    return (
        <section id="education" className="p-8 glass-container">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                Pendidikan
            </h2>
            <div className="p-6 bg-slate-800 rounded-2xl shadow-lg mb-4 border border-transparent hover:border-purple-500 transition-all duration-300 ease-in-out">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                        <h3 className="text-xl font-semibold text-white">Sistem Informasi</h3>
                        <p className="text-sm font-medium text-purple-300">Universitas Gunadarma</p>
                        <p className="text-xs text-gray-400">2022 - Sekarang</p>
                    </div>
                </div>
            </div>
            <div className="p-6 bg-slate-800 rounded-2xl shadow-lg border border-transparent hover:border-purple-500 transition-all duration-300 ease-in-out">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                        <h3 className="text-xl font-semibold text-white">Multimedia</h3>
                        <p className="text-sm font-medium text-purple-300">SMK Pariwisata Metland</p>
                        <p className="text-xs text-gray-400">2019 - 2022</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Education;