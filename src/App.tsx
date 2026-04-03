import { useState, useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import ProjectPage from './pages/ProjectPage';

export default function App() {
  const [history, setHistory] = useState(['home']);
  const currentPage = history[history.length - 1];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleSelectCategory = (path: string) => {
    setHistory((prev: string[]) => [...prev, path]);
  };

  const handleBack = () => {
    setHistory((prev: string[]) => prev.length > 1 ? prev.slice(0, -1) : prev);
  };

  return (
    <>
      <Cursor />
      
      {currentPage === 'home' ? (
        <div id="page-home" className="animate-fade-up">
          <Navbar />
          <Hero />
          <Work onSelectCategory={handleSelectCategory} />
          <About />
          <Process />
          <Contact />
          <Footer />
        </div>
      ) : currentPage.startsWith('project/') ? (
        <div className="animate-fade-up">
          <ProjectPage 
            projectId={currentPage.replace('project/', '')}
            onBack={handleBack}
          />
        </div>
      ) : (
        <div className="animate-fade-up">
          <CategoryPage 
            category={currentPage} 
            onBack={handleBack} 
            onSelectCategory={handleSelectCategory} 
          />
        </div>
      )}
    </>
  );
}

