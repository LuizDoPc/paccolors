import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import io from 'socket.io-client';

const App = () => {
  const [colorA, setColorA] = useState('red');
  const [colorB, setColorB] = useState('blue');

  useEffect(() => {
    const socket = io('http://192.168.0.12:3333');
    socket.on('colors', (colors) => {
      setColorA(colors.colorA);
      setColorB(colors.colorB);
    });
  }, [])

  StatusBar.setBackgroundColor(colorA, true);
  return (
    <View>
      <View style={{ backgroundColor: colorA, width: '100%', height: '50%' }} />
      <View style={{ backgroundColor: colorB, width: '100%', height: '50%' }} />
    </View>
  );
};

export default App;
