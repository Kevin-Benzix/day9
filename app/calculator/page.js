import "./calculator.css";

const Calculations = function () {
  return (
    <div className="dark-bg">
      <h1>My andriod calculator</h1>
      <p>Here is the disdply page</p>
      <div className="calculator-background">
        <button className="green-button">C</button>
        <button className="green-button">÷</button>
        <button className="green-button">X</button>
        <button className="green-button">⌦</button>
        <button className="white-button">7</button>
        <button className="white-button">8</button>
        <button className="white-button">9</button>
        <button className="green-button">-</button>
        <button className="white-button">4</button>
        <button className="white-button">5</button>
        <button className="white-button">6</button>
        <button className="green-button">+</button>
        <div className="row">
          <div>
            <button className="white-button">1</button>
            <button className="white-button">2</button>
            <button className="white-button">3</button>
            <button className="white-button">%</button>
            <button className="white-button">0</button>
            <button className="white-button">.</button>
          </div>
          <button className="equals-button">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculations;
