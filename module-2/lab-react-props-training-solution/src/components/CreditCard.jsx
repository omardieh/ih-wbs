import visaImage from "../assets/images/visa.png";
import mastercardImage from "../assets/images/master-card.svg";

const CreditCard = (props) => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
  const cardLogo = type.toLowerCase() === 'visa' ? visaImage : mastercardImage;


  const expirationMonthTwoDigitFormat = expirationMonth.toString().length === 1 ? "0" + expirationMonth : expirationMonth

  return (
    <div className="CreditCard" style={{ backgroundColor: bgColor, color: color, width: 350, height: 200 }}>
      <div className="logo">
        <img src={cardLogo} alt="logo-visa-or-mastercard" />
      </div>
      <div className="creditcard-number">
        <h1>···· ···· ····{number.toString().slice(12)}</h1>
      </div>
      <div className="expiration bank">
        <span>Expires {expirationMonthTwoDigitFormat}/{expirationYear.toString().slice(2)}</span>
        <span className="bank">{bank}</span>
      </div>
      <div className="owner">
      <p>

        {owner}
      </p>
      </div>
    </div>
  )
}

export default CreditCard;