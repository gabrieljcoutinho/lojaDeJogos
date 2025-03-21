import React, { useState, useRef, useEffect } from 'react';
import '../CSSdeCadaPagina/home.css';

const Home = () => {


  const cardData = [
    {
      title: 'Nossa Missão',
      content: 'Proporcionar alegria e emoção através de jogos que inspiram, desafiam e conectam pessoas de todo o mundo.',
      backContent: 'Nossa missão é criar experiências de jogo inesquecíveis.',
    },
    {
      title: 'Nossos Valores',
      content: 'Criatividade, colaboração e compromisso com a excelência. Buscamos sempre aprimorar nossos jogos e serviços.',
      backContent: 'Valorizamos a inovação e a qualidade em tudo que fazemos.',
    },
    {
      title: 'Inovação Constante',
      content: 'Explorando novas tecnologias e ideias para criar jogos que surpreendam e encantem.',
      backContent: 'Estamos sempre buscando novas formas de surpreender nossos jogadores.',
    },
    {
      title: 'Tecnologia de Ponta',
      content: 'Investimos em tecnologia de ponta para oferecer gráficos de última geração, jogabilidade imersiva e experiências inovadoras.',
      backContent: 'Utilizamos as tecnologias mais avançadas para criar jogos incríveis.',
    },
    {
      title: 'Comunidade de Jogadores',
      content: 'Valorizamos nossa comunidade de jogadores e buscamos criar um ambiente acolhedor e inclusivo para todos.',
      backContent: 'Nossa comunidade é o coração do PlayStation Palace.',
    },
    {
      title: 'Prêmios e Reconhecimentos',
      content: 'Temos orgulho de nossas conquistas e do reconhecimento da indústria de jogos por nossa excelência e inovação.',
      backContent: 'Nossos jogos são reconhecidos pela crítica e pelos jogadores.',
    },
    {
      title: 'Sustentabilidade',
      content: 'Temos compromisso com práticas sustentáveis e buscamos reduzir nosso impacto ambiental.',
      backContent: 'Nos preocupamos com o futuro do planeta e adotamos práticas sustentáveis.',
    },
    {
      title: 'Realidade Virtual',
      content: 'Experimente a próxima geração de jogos com nossa tecnologia de realidade virtual de ponta.',
      backContent: 'A realidade virtual leva a imersão nos jogos a um novo nível.',
    },
    {
      title: 'E-sports',
      content: 'Participe de competições emocionantes e mostre suas habilidades em nossos torneios de e-sports.',
      backContent: 'Os e-sports são uma forma de competir e se divertir com outros jogadores.',
    },
    {
      title: 'Jogos Exclusivos',
      content: 'Desfrute de uma vasta biblioteca de jogos exclusivos que você não encontrará em nenhum outro lugar.',
      backContent: 'Nossa biblioteca de jogos exclusivos oferece experiências únicas.',
    },
    {
      title: 'Equipamentos',
      content: 'Desfrute da melhor tecnologia com os Upgrades dos diversos equipamentos disponibilizados',
      backContent: 'Os melhores equipamentos para uma experiência de jogo completa.',
    },
  ];

  const [flippedCard, setFlippedCard] = useState(null);
  const cardRefs = useRef([]);

  const sendNotification = (message) => {
    fetch('http://localhost:3001/api/notify', { // Alterado para localhost
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    }).catch((error) => console.error('Erro ao enviar notificação:', error));
  };

  useEffect(() => {
    sendNotification('Página Home acessada');
  }, []);

  const handleClickOutside = (event) => {
    if (flippedCard !== null && cardRefs.current[flippedCard] && !cardRefs.current[flippedCard].contains(event.target)) {
      setFlippedCard(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [flippedCard]);

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
    sendNotification(`Cartão ${index + 1} clicado`);
  };

  const handleMouseEnter = (index) => {
    document.body.style.cursor = 'none';
  };

  const handleMouseLeave = (index) => {
    document.body.style.cursor = 'default';
  };

  return (
<div className="home">
      <h1>Bem-vindo ao PlayStation Palace</h1>

      <div className="card-container">
        {cardData.map((card, index) => (
          <div
            className={`card ${flippedCard === index ? 'flipped' : ''}`}
            key={index}
            onClick={() => handleCardClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            ref={(element) => (cardRefs.current[index] = element)}
          >
            <div className="card-content front" aria-label="Clique para virar">
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
            <div className="card-content back" aria-label="Clique para desvirar">
              <h3>{card.title}</h3>
              <p>{card.backContent}</p>
            </div>
          </div>
        ))}
      </div>
      <p>
        Junte-se a nós nesta jornada emocionante e descubra o futuro dos jogos com o PlayStation Palace!
      </p>
    </div>
  );
};

export default Home;