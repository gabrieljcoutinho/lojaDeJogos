import React, { useState } from 'react';
import '../CSSCadaPageCompra/GodOfWarRagnarok.css';
import godOfWarRagnarok from '../imgsCds/godOfWarRagnarok.jpg';

const GodOfWarRagnarok = () => {
  const [quantity, setQuantity] = useState(1);
  const [buttonText, setButtonText] = useState('Comprar');
  const pricePerUnit = 230.00;
  const totalPrice = quantity * pricePerUnit;
  const [rating, setRating] = useState(0);
  const [password, setPassword] = useState('');
  const [isPurchased, setIsPurchased] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const handleButtonClick = () => {
    if (isPurchased) {
      return;
    }

    if (!showPasswordInput) {
      setShowPasswordInput(true);
    }
  };

  const handlePasswordKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (!password) {
        alert('Coloque a sua senha');
        return;
      }

      setButtonText('Comprado');
      setIsPurchased(true);
      setShowPasswordInput(false);
      console.log(`Compra realizada com a senha: ${password}`);
    }
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'filled' : ''}`}
          onClick={() => handleRatingClick(i)}
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="pagegodOfWarRagnarok">
      <div className="godOfWarRagnarokContent">
        <img src={godOfWarRagnarok} alt="God of War Ragnarök" title="God of War Ragnarök" className="godOfWarRagnarokImage" />
        <div className="godOfWarRagnarokDetails">
          <h2>God of War Ragnarök</h2>
          <p className="godOfWarRagnarokDescription">
            Embarque em uma jornada épica e sincera enquanto Kratos e Atreus enfrentam a chegada do Ragnarök.
            Explore os reinos da mitologia nórdica e lute contra inimigos temíveis nesta aventura de ação aclamada pela crítica.
          </p>
          <div className="priceAndPlatform">
            <span className="price">R$: {totalPrice.toFixed(2)}</span>
            <span className="platform">Disponível para: PS5, PS4</span>
          </div>
          <div className="quantitySelector">
            <label htmlFor="quantity">Quantidade:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
          <div className="buyAndRating">
            <button className={`btnCompraLoja ${isPurchased ? 'bought' : ''}`} title="Comprar" onClick={handleButtonClick}>
              <span>{buttonText}</span>
            </button>
            <div className="ratingBox4" title='Faixa Etária'>18</div>
          </div>
          {showPasswordInput && (
            <div className="passwordInput">
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handlePasswordKeyPress}
              />
            </div>
          )}
          <div className="userRating">
            <label>Avaliação:</label>
            <div className="starRating">{renderStars()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GodOfWarRagnarok;