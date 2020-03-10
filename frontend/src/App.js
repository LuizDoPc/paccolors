import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [colorA, setColorA] = useState('');
  const [colorB, setColorB] = useState('');
  return (
    <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <input value={colorA} onChange={(e) => setColorA(e.target.value)} style={{ fontSize: 30 }}/>
      <input value={colorB} onChange={(e) => setColorB(e.target.value)} style={{ marginTop: '1%', fontSize: 30 }} />
      <button style={{ marginTop: '1%', fontSize: 30 }} onClick={() => {
        axios.post('https://mighty-woodland-51006.herokuapp.com:3333', {
          colorA,
          colorB
        })        
      }} >GO</button>
    </div>
  );
}

export default App;
