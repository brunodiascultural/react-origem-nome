import React from 'react';
import Paises from './Paises';
import './style.css';

function App() {
  const [dados, setDados] = React.useState(null);
  const [paises, setPaises] = React.useState(null);
  const [nome, setNome] = React.useState('');
  const [error, setError] = React.useState(null);

  function validateNome(value) {
    if (value.length === 0) {
      setError();
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateNome(target.value);
  }

  function handleChange({ target }) {
    if (error) validateNome(target.value);
    setNome(target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (validateNome(nome)) {
      const responseDados = await fetch(
        `https://api.nationalize.io/?name=${nome}`
      );
      const jsonDados = await responseDados.json();
      setDados(jsonDados);
      const responsePaises = await fetch(
        'https://gist.githubusercontent.com/almost/7748738/raw/ef1825a0ed94af095f0a1f58a92d2110916c20fb/countries.json'
      );

      const jsonPaises = await responsePaises.json();
      setPaises(jsonPaises);
    } else {
      return null;
    }
  }

  return (
    <div className="main">
      <h1>Insira um nome para descobrir a origem dele.</h1>
      <div className="content">
        <input
          id="nome"
          type="text"
          value={nome.replace(/\s/g, '')}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Digite um nome." required
        />
        <button type="submit" onClick={handleSubmit}>
          Pesquisar
        </button>
      </div>

      {!error && dados && paises && (
        <Paises dados={dados} paises={paises}></Paises>
      )}
      <div className="card-footer">
        <p className="card-footer-item subfooter-p">
          Bruno Dias  &copy; 2022
        </p>
      </div>
    </div>
  );
}

export default App;
