import React from 'react';
import Title from './components/Title'; 
import Card from './components/Card'; 
import Wrapper from './components/Wrapper'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title></Title>
        <Card></Card>
      </Wrapper>
    </div>
  );
}

export default App;
