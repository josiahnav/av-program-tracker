import React from 'react';

import HomePage from './Components/Pages/HomePage/HomePage';
import Header from './Components/Common/Header';
import ProjectsProvider from './Contexts/ProjectsProvider';

import './App.css';

function App() {
    return (
        <ProjectsProvider>
            <div className="App">
                <Header/>
                <HomePage/>
            </div>
        </ProjectsProvider>
    );
}

export default App;
