import React, { useEffect, useState } from "react";
import axios from "axios";

// Styles
import "../styles/CurrencyData.css";

const CurrencyData = () => {
  const [Currencies, setCurrencies] = useState([]);
  const getCurrencies = async () => {
    const response = await axios.get(
      "http://data.fixer.io/api/latest?access_key=065b29bd51914b561d1b9ecfaa9e4300"
    );

    setCurrencies(response.data.rates);
  };
  useEffect(() => {
    getCurrencies();
  }, []);

  return (
    <div className="currency_data">
      <div className="currency_data__container">
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Rate to 1 EUR</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(Currencies).map((currency) => (
              <tr key={currency}>
                <td>{currency}</td>
                <td>{Currencies[currency]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrencyData;
