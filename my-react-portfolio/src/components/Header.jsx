import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header className="p-4 sm:p-8 lg:hidden fixed top-0 left-0 w-full z-40 bg-[rgba(15,23,42,0.9)] backdrop-blur-md">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <h1 className="text-xl font-bold text-white">Rivaldi</h1>
                    <button id="hamburger-menu" className="text-purple-400 p-2 rounded-md focus:outline-none" onClick={toggleMenu}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path id="hamburger-icon" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" className={isOpen ? 'hidden' : ''}></path>
                            <path id="close-icon" className={isOpen ? '' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </header>

            <div id="mobile-menu" className={isOpen ? "fixed top-0 left-0 w-full h-full bg-[rgba(15,23,42,0.9)] backdrop-blur-md z-30 overflow-y-auto pt-24" : "hidden"} >
                <div className="glass-container p-8 m-4 sm:m-8">
                    <nav className="w-full text-left space-y-2">
                        <Link to="/" className="block p-3 text-sm font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-purple-400 transition-colors duration-300" onClick={closeMenu}>
                            <span className="flex items-center space-x-3"><span>Beranda</span></span>
                        </Link>
                        <a href="/#work" className="block p-3 text-sm font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-purple-400 transition-colors duration-300" onClick={closeMenu}>
                            <span className="flex items-center space-x-3"><span>Proyek</span></span>
                        </a>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;