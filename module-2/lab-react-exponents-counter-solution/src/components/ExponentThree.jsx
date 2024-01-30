const PowerThree = (props) => {
  const { num } = props;
  
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{num}³</p>
      <p className="exponent-result">
        {num} * {num} * {num} ={" "}
        <span className="total">{num ** 3}</span>
      </p>
    </div>
  );
  };

export default PowerThree;