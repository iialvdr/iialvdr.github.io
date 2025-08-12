import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <div className="lg:hidden p-4 sm:p-8">
        <div className="glass-container flex flex-col items-center text-center p-8 mt-20">
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
        </div>
      </div>
      <section id="about" className="p-8 glass-container">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
              Tentang Saya
          </h2>
          <p className="text-gray-400 leading-relaxed">
              Mahasiswa semester 6 jurusan <strong>Sistem Informasi</strong> di <strong>Universitas Gunadarma</strong> dengan minat kuat dalam <strong>UI/UX Design</strong> dan <strong>Frontend Web Development</strong>. Memiliki pemahaman mendalam tentang pengembangan sistem digital, desain antarmuka yang berfokus pada pengalaman pengguna, serta kemampuan dalam mengimplementasikan desain ke dalam kode menggunakan HTML, CSS, dan JavaScript. Berpengalaman menggunakan Figma untuk membuat prototipe interaktif dan terus mengasah keterampilan analisis, desain, dan pengkodean. Bersemangat untuk mengembangkan kemampuan lebih jauh dan berkontribusi dalam menciptakan solusi digital yang inovatif dan ramah pengguna.
          </p>
      </section>
      <Experience />
      <Skills />
      <Education />
      <Projects />
    </>
  );
};

export default HomePage;