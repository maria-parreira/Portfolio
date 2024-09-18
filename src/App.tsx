import React from 'react';
import Header from './components/Header';
import About from './components/Aboutme';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import './index.css';

const App: React.FC = () => {
    return (
        <div
            className=" bg-cover bg-center bg-no-repeat bg-fixed "
            style={{ backgroundImage: 'url(./src/assets/bgimage.png)' }}
        >
            <Header />
            <main className="container mx-auto p-4 bg-white bg-opacity-80">
                <Introduction />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Resume />
            </main>
            <Footer />
        </div>
    );
};

export default App;
