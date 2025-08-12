import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="lg:sticky lg:top-8 h-fit p-8 glass-container flex-col items-center text-center hidden lg:flex">
            <div className="w-40 h-40 mb-6 rounded-full overflow-hidden profile-border">
                <img
                    src="https://placehold.co/160x160/1e293b/e2e8f0?text=Valdi"
                    alt="Rivaldi Aditya Maulana"
                    className="w-full h-full object-cover"
                />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Rivaldi Aditya Maulana</h1>
            <p className="text-purple-400 font-medium mb-6">UI/UX Designer & Frontend Web Developer</p>
            <div className="space-y-4 text-left w-full mt-4">
                <p className="flex items-center space-x-3 text-sm text-slate-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-purple-400"><path d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path><path d="M12 19a7 7 0 1 0-14 0 7 7 0 0 0 14 0z"></path></svg>
                    <span>Johar Baru, Jakarta Pusat</span>
                </p>
                <a href="tel:085155433102" className="flex items-center space-x-3 text-sm text-slate-300 hover:text-purple-400 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-purple-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    <span>0851-5543-3102</span>
                </a>
                <a href="mailto:rivaldiadityamaulana28@gmail.com" className="flex items-center space-x-3 text-sm text-slate-300 hover:text-purple-400 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-purple-400"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                    <span>rivaldiadityamaulana28@gmail.com</span>
                </a>
            </div>

            <div className="w-full h-px bg-slate-800 my-6"></div>

            <nav className="w-full text-left space-y-2">
                <Link to="/#about" className="flex items-center space-x-3 p-3 text-sm font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-purple-400 transition-colors duration-300">
                    <span>Tentang Saya</span>
                </Link>
                <Link to="/#experience" className="flex items-center space-x-3 p-3 text-sm font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-purple-400 transition-colors duration-300">
                    <span>Pengalaman</span>
                </Link>
                <Link to="/#skills" className="flex items-center space-x-3 p-3 text-sm font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-purple-400 transition-colors duration-300">
                    <span>Keahlian</span>
                </Link>
                <Link to="/#education" className="flex items-center space-x-3 p-3 text-sm font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-purple-400 transition-colors duration-300">
                    <span>Pendidikan</span>
                </Link>
                <Link to="/#non-formal-education" className="flex items-center space-x-3 p-3 text-sm font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-purple-400 transition-colors duration-300">
                    <span>Pendidikan Nonformal</span>
                </Link>
                <Link to="/#languages" className="flex items-center space-x-3 p-3 text-sm font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-purple-400 transition-colors duration-300">
                    <span>Bahasa</span>
                </Link>
                <Link to="/#work" className="flex items-center space-x-3 p-3 text-sm font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-purple-400 transition-colors duration-300">
                    <span>Proyek</span>
                </Link>
            </nav>
        </aside>
    );
};

export default Sidebar;