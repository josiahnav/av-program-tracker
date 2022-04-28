import React from 'react';
import './App.css';

import HomePage from './Components/Pages/HomePage/HomePage';
import Header from './Components/Common/Header';

function App() {
    return (
        <div className="App">
            <Header/>
            <HomePage/>
        </div>
    );
}

export default App;
