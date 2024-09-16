import React from 'react';
import Header from './components/Header';
import About from './components/Aboutme';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Introduction from './components/Introduction.tsx';
import './index.css'

const App: React.FC = () => {
    return (
        <div>
            <Header/>
                <Introduction/>
                <About/>
                <Education/>
                <Skills/>
                <Projects/>
                <Experience/>
                <Resume/>
                <Footer/>
        </div>
);
};

export default App;
