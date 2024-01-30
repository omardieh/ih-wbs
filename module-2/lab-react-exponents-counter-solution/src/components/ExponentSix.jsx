const PowerSix = (props) => {
  const { num } = props;
  
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{num}⁶</p>
      <p className="exponent-result">
        {num} * {num} * {num} * {num} * {num} * {num} ={" "}
        <span className="total">{num ** 6}</span>
      </p>
    </div>
  );
};

export default PowerSix;