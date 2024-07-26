
import { React, useState } from 'react';
import './styles/app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Music from './Music';
import { Contact } from './Contact';
import Work from './Work';

function App() {

  const [color, setColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  function randomColor() {
      let color = [];
      for (let i = 0; i < 3; i++) {
          color.push(Math.floor(Math.random() * 256));
      }
      return 'rgb(' + color.join(', ') + ')';
  };

  const changeColor = () => {
      setColor(randomColor());
      setBackgroundColor(randomColor())
      console.log(randomColor());
  }

  return (
    <div className='app' style={{backgroundColor: backgroundColor}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home color={color} changeColor={changeColor} />} />
          <Route path='/about' element={<About color={color} changeColor={changeColor} />} />
          <Route path='/music' element={<Music color={color} changeColor={changeColor} />} />
          <Route path='/contact' element={<Contact color={color} changeColor={changeColor} />} />
          <Route path='/work' element={<Work color={color} changeColor={changeColor} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
