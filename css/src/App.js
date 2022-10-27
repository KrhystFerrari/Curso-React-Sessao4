import './App.css';
import MyComponent from './components/MyComponent';

import {useState} from 'react';

function App() {

  const n = 15;
  const [name] = useState('Krhys');

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de Componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{color: 'blue', padding: '25px', borderTop: '2px solid red'}}>
        Este elemento foi estilizado de forma Inline
      </p>
      {/* CSS Inline Style Dinãmico */}
      <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'green'})}>CSS Dinãmico</h2>
      <h2 style={n > 10 ? ({color: 'purple'}) : ({color: 'green'})}>CSS Dinãmico</h2>
      <h2 style={name === 'Krhys' ? ({ color: 'green', backgroundColor: 'black'}) : null }>Teste nome</h2>
    </div>
  );
}

export default App;
