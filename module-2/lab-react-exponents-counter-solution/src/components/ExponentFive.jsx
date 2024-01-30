const PowerFive = (props) => {
  const { num } = props;
  
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{num}⁵</p>
      <p className="exponent-result">
        {num} * {num} * {num} * {num} * {num} ={" "}
        <span className="total">{num ** 5}</span>
      </p>
    </div>
  );
};

export default PowerFive;
