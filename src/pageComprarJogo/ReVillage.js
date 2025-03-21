import React, { useState } from 'react';
import '../CSSCadaPageCompra/reVillage.css';
import reVillage from '../imgsCds/reVillage.jpg';

const ReVillage = () => {
  const [quantity, setQuantity] = useState(1);
  const [buttonText, setButtonText] = useState('Comprar');
  const pricePerUnit = 259.90;
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
    <div className="pageReVillage">
      <div className="reVillageContent">
        <img src={reVillage} alt="Resident Evil Village" title="Resident Evil Village" className="reVillageImage" />
        <div className="reVillageDetails">
          <h2>Resident Evil Village</h2>
          <p className="reVillageDescription">
            Experimente o survival horror como nunca antes em Resident Evil Village, a oitava grande edição da série Resident Evil.
            Explore uma vila misteriosa e enfrente criaturas aterrorizantes em uma narrativa envolvente.
          </p>
          <div className="priceAndPlatform">
            <span className="price">R$: {totalPrice.toFixed(2)}</span>
            <span className="platform">Disponível para: PS5, PS4, Xbox Series X/S, Xbox One, PC</span>
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
            <div className="ratingBox7" title='Faixa Etária'>18</div>
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

export default ReVillage;