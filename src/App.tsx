import React from 'react';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './styles/Global.css';
const App: React.FC = () => {
    return (
        <div>
            <Header/>
            <div className="first-section">
                <Aboutme/>
            </div>
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
