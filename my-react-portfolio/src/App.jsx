import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import './assets/style.css';
// Baris di bawah ini dihapus untuk menghindari konflik
// import './assets/index.css';

function App() {
  return (
    <Router>
      <div className="bg-bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
      </div>
      <Header />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 sm:p-8 lg:p-0">
        <Sidebar />
        <div className="lg:col-span-2 space-y-8 p-4 sm:p-8 lg:p-0 lg:mt-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;