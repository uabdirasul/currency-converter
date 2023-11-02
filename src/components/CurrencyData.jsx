import React, { useEffect, useState } from "react";
import axios from "axios";

// Styles
import "../styles/CurrencyData.css";

const CurrencyData = () => {
  const [Currencies, setCurrencies] = useState([]);
  const getCurrencies = async () => {
    const config = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    const response = await axios.get(
      "https://api.fastforex.io/fetch-all?api_key=e0cc4fea22-cfb2cf1bf9-s3hq87",
      config
    );
    setCurrencies(response.data.results);
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
              <th>Rate to 1 UZS</th>
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
