import React from 'react';
import Button from '../../components/UI/Button/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Button className='btn__main' onClick={() => console.log(1)}>
        Test
      </Button>
    </div>
  );
}

export default App;
