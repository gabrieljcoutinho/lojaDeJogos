// DetalhesDoJogo.js
import React from 'react';

const DetalhesEldenRing = ({ genero, plataformas, lancamento, desenvolvedora, classificacao, preco }) => {
  return (
    <div className="detalhesDoJogo">
      <strong>Género:</strong> <span>{genero}</span><br />
      <strong>Plataformas:</strong> <span>{plataformas}</span><br />
      <strong>Lançamento:</strong> <span>{lancamento}</span><br />
      <strong>Desenvolvedora:</strong> <span>{desenvolvedora}</span><br />
      <strong>Classificação:</strong> <span>{classificacao}</span><br />
      <p className='precoJogo'>
      {preco}
      </p>
    </div>
  );
};

export default DetalhesEldenRing;