import React from 'react';
import Header from './components//Header';
import About from './components//Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;
