import { React } from 'react';
import './styles/app.css';

function App(props) {
  return (
    <div className='app'>
      {props.children}
    </div>
  );
}

export default App;
