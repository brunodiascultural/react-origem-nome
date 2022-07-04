import React from 'react';


const paises = ({ dados, paises }) => {
  return (
    <div>
      {dados.country.length === 0 ? (
        <p className="alerta">Nome não encontrado!</p>
      ) : (
        <table>
          <tr>
            <th>País</th>
            <th>Probabilidade</th>
          </tr>

          {dados.country.map(({ country_id, probability }) =>
            paises.map(({ name, code }) =>
              country_id === code ? (
                <tr key={code}>
                  <td>{name}</td>
                  <td>{(probability * 100).toFixed(2).replace('.', ',')}%</td>
                </tr>
              ) : null
            )
          )}
        </table>
      )}
    </div>
  );
};

export default paises;
