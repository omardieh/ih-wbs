/* 
Bonus: Iteration 4 | Refactor
As you may have noticed, the <Exponent... /> components share the same structure and logic. Whenever in code we have a duplicated logic and structure, it is a good place to start thinking about refactoring and DRY approach. This is exactly what you should do next. Refactor the <Exponent... /> components into one reusable component named Exponent. This component should dynamically display exponents and perform calculations. The component should take the following props:

num - Number value that serves as a base on which the exponent is added and calculated
exponent - Number value representing the exponent to be applied to the base num.
*/

function Exponent({ num, exponent }) {
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}<sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {Array(exponent).fill(num).join(' * ')} = {" "}
        <span className="total">{num ** exponent}</span>
      </p>
    </div>
  );
}

export default Exponent;