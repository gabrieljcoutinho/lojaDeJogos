import React from 'react';
import '../CSSdeCadaPagina/notFound.css';
import { Link } from 'react-router-dom'; // Importe o Link para navegação

function NotFound() {
  return (
    <div className="divNotFound">
      <div className="containerNotFound">
        <h1 className="tituloNotFound">Erro 404! Ih, deu ruim!</h1>
        <p className="textoNotFound">A página que você tentou acessar não existe ou foi para um universo paralelo.
          <span className='styleBoneco404'>¯\_(ツ)_/¯</span></p>
        <div className="botoesNotFound">
          <Link to="/" className="botaoVoltar">Voltar para a página inicial</Link>
          {/* Opcional: Adicionar um link para o sitemap ou ajuda */}
          {/* <Link to="/sitemap" className="botaoOutro">Ver o mapa do site</Link> */}
        </div>
      </div>
    </div>
  );
}

export default NotFound;