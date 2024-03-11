import './css/App.css';
import './css/Fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Aboutme from './components/Aboutme';
import Header from './components/Header';
import Landing from './components/Landing';
import MainContainer from './components/MainContainer';



function App() {
  return (
    <div className="App">
      <MainContainer>
        <Header />
        <Landing />
        <Aboutme />
      </MainContainer>
    </div>
  );
}

export default App;
