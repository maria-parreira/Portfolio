// src/App.tsx
import React from 'react';
import Header from './components/Header';
import About from './components/Aboutme';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import './index.css';

const App: React.FC = () => {
    return (
        <div className="font-sans bg-gray-100 text-gray-900">
            <Header />
            <main className="container mx-auto p-4">
                <Introduction />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Experience />
                <Resume />
            </main>
            <Footer />
        </div>
    );
};

export default App;
