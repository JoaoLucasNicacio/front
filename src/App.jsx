import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/usuarios')
      .then(res => res.json())
      .then(data => setUsuarios(data))
      .catch(err => console.error('Erro ao buscar usuários:', err));
  }, []);

  return (
    <div className='App'>
      <h1>Usuários da API</h1>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>{usuario}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
