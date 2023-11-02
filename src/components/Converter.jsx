import React, { useState } from "react";

// Flags
import CurrencyFlag from "react-currency-flags";

// Styles
import "../styles/Converter.css";
import axios from "axios";

const Converter = () => {
  const [amount, setAmount] = useState(0);
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState("UZS");
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState("USD");
  const [result, setResult] = useState(null);

  // Currencies
  const currencies = [
    { value: "AED", label: "United Arab Emirates Dirham" },
    { value: "AFN", label: "Afghan Afghani" },
    { value: "ALL", label: "Albanian Lek" },
    { value: "AMD", label: "Armenian Dram" },
    { value: "ANG", label: "Netherlands Antillean Guilder" },
    { value: "AOA", label: "Angolan Kwanza" },
    { value: "ARS", label: "Argentine Peso" },
    { value: "AUD", label: "Australian Dollar" },
    { value: "AWG", label: "Aruban Florin" },
    { value: "AZN", label: "Azerbaijani Manat" },
    { value: "BAM", label: "Bosnia-Herzegovina Convertible Mark" },
    { value: "BBD", label: "Barbadian Dollar" },
    { value: "BDT", label: "Bangladeshi Taka" },
    { value: "BGN", label: "Bulgarian Lev" },
    { value: "BHD", label: "Bahraini Dinar" },
    { value: "BIF", label: "Burundian Franc" },
    { value: "BMD", label: "Bermudan Dollar" },
    { value: "BND", label: "Brunei Dollar" },
    { value: "BOB", label: "Bolivian Boliviano" },
    { value: "BRL", label: "Brazilian Real" },
    { value: "BSD", label: "Bahamian Dollar" },
    { value: "BTN", label: "Bhutanese Ngultrum" },
    { value: "BWP", label: "Botswanan Pula" },
    { value: "BZD", label: "Belize Dollar" },
    { value: "CAD", label: "Canadian Dollar" },
    { value: "CDF", label: "Congolese Franc" },
    { value: "CHF", label: "Swiss Franc" },
    { value: "CLF", label: "Chilean Unit of Account (UF)" },
    {
      value: "CLP",
      label: "Chilean Peso",
    },
    {
      value: "",
      label: "Chinese Yuan Renminbi (Offshore)",
    },
    {
      value: "CNH",
      label: "Chinese Yuan Renminbi (Offshore)",
    },
    {
      value: "CNY",
      label: "Chinese Yuan Renminbi (Onshore)",
    },
    {
      value: "COP",
      label: "Colombian Peso",
    },
    {
      value: "CUP",
      label: "Cuban Peso",
    },
    {
      value: "CVE",
      label: "Cape Verdean Escudo",
    },
    {
      value: "CZK",
      label: "Czech Koruna",
    },
    {
      value: "DJF",
      label: "Djiboutian Franc",
    },
    {
      value: "DKK",
      label: "Danish Krone",
    },
    {
      value: "DOP",
      label: "Dominican Peso",
    },
    {
      value: "DZD",
      label: "Algerian Dinar",
    },
    {
      value: "EGP",
      label: "Egyptian Pound",
    },
    {
      value: "ERN",
      label: "Eritrean Nakfa",
    },
    {
      value: "ETB",
      label: "Ethiopian Birr",
    },
    {
      value: "EUR",
      label: "Euro",
    },
    {
      value: "FJD",
      label: "Fijian Dollar",
    },
    {
      value: "FKP",
      label: "Falkland Islands Pound",
    },
    {
      value: "GBP",
      label: "British Pound Sterling",
    },
    {
      value: "GEL",
      label: "Georgian Lari",
    },
    {
      value: "GHS",
      label: "Ghanaian Cedi",
    },
    {
      value: "GIP",
      label: "Gibraltar Pound",
    },
    {
      value: "GMD",
      label: "Gambian Dalasi",
    },
    {
      value: "GNF",
      label: "Guinean Franc",
    },
    {
      value: "GTQ",
      label: "Guatemalan Quetzal",
    },
    {
      value: "GYD",
      label: "Guyanaese Dollar",
    },
    {
      value: "HKD",
      label: "Hong Kong Dollar",
    },
    {
      value: "HNL",
      label: "Honduran Lempira",
    },
    {
      value: "HRK",
      label: "Croatian Kuna",
    },
    {
      value: "HTG",
      label: "Haitian Gourde",
    },
    { value: "HUF", label: "Hungarian Forint" },
    { value: "IDR", label: "Indonesian Rupiah" },
    { value: "ILS", label: "Israeli New Shekel" },
    { value: "INR", label: "Indian Rupee" },
    { value: "IQD", label: "Iraqi Dinar" },
    { value: "IRR", label: "Iranian Rial" },
    { value: "ISK", label: "Icelandic Krona" },
    { value: "JMD", label: "Jamaican Dollar" },
    { value: "JOD", label: "Jordanian Dinar" },
    { value: "JPY", label: "Japanese Yen" },
    { value: "KES", label: "Kenyan Shilling" },
    { value: "KGS", label: "Kyrgyzstani Som" },
    { value: "KHR", label: "Cambodian Riel" },
    { value: "KMF", label: "Comorian Franc" },
    { value: "KPW", label: "North Korean Won" },
    { value: "KRW", label: "South Korean Won" },
    { value: "KWD", label: "Kuwaiti Dinar" },
    { value: "KYD", label: "Cayman Islands Dollar" },
    { value: "KZT", label: "Kazakhstani Tenge" },
    { value: "LAK", label: "Laotian Kip" },
    { value: "LBP", label: "Lebanese Pound" },
    { value: "LKR", label: "Sri Lankan Rupee" },
    { value: "LRD", label: "Liberian Dollar" },
    { value: "LSL", label: "Lesotho Loti" },
    { value: "LYD", label: "Libyan Dinar" },
    { value: "MAD", label: "(MAD)" },
    { value: "MDL", label: "Moldovan Leu" },
    {
      value: "MGA",
      label: "Malagasy Ariary",
    },
    {
      value: "MKD",
      label: "Macedonian Denar",
    },
    {
      value: "MMK",
      label: "Myanmar Kyat",
    },
    {
      value: "MNT",
      label: "Mongolian Tugrik",
    },
    {
      value: "MOP",
      label: "Macanese Pataca",
    },
    {
      value: "MRU",
      label: "Mauritanian Ouguiya",
    },
    {
      value: "MUR",
      label: "Mauritian Rupee",
    },
    {
      value: "MVR",
      label: "Maldivian Rufiyaa",
    },
    {
      value: "MWK",
      label: "Malawian Kwacha",
    },
    {
      value: "MXN",
      label: "Mexican Peso",
    },
    {
      value: "MYR",
      label: "Malaysian Ringgit",
    },
    {
      value: "MZN",
      label: "Mozambican Metical",
    },
    {
      value: "NAD",
      label: "Namibian Dollar",
    },
    {
      value: "NGN",
      label: "Nigerian Naira",
    },
    {
      value: "NOK",
      label: "Norwegian Krone",
    },
    {
      value: "NPR",
      label: "Nepalese Rupee",
    },
    {
      value: "NZD",
      label: "New Zealand Dollar",
    },
    {
      value: "OMR",
      label: "Omani Rial",
    },
    {
      value: "PAB",
      label: "Panamanian Balboa",
    },
    {
      value: "PEN",
      label: "Peruvian Sol",
    },
    {
      value: "PGK",
      label: "Papua New Guinean Kina",
    },
    {
      value: "PHP",
      label: "Philippine Peso",
    },
    {
      value: "PKR",
      label: "Pakistani Rupee",
    },
    {
      value: "PLN",
      label: "Polish Zloty",
    },
    {
      value: "PYG",
      label: "Paraguayan Guarani",
    },
    {
      value: "QAR",
      label: "Qatari Riyal",
    },
    {
      value: "RON",
      label: "Romanian Leu",
    },
    {
      value: "RSD",
      label: "Serbian Dinar",
    },
    {
      value: "RUB",
      label: "Russian Ruble",
    },
    {
      value: "RWF",
      label: "Rwandan Franc",
    },
    {
      value: "SAR",
      label: "Saudi Arabian Riyal",
    },
    {
      value: "SCR",
      label: "Seychellois Rupee",
    },
    { value: "SDG", label: "Sudanese Pound" },
    { value: "SEK", label: "Swedish Krona" },
    { value: "SGD", label: "Singapore Dollar" },
    { value: "SHP", label: "Saint Helena Pound" },
    { value: "SLL", label: "Sierra Leonean Leone" },
    { value: "SOS", label: "Somali Shilling" },
    { value: "SRD", label: "Surinamese Dollar" },
    { value: "SYP", label: "Syrian Pound" },
    { value: "SZL", label: "Swazi Lilangeni" },
    { value: "THB", label: "Thai Baht" },
    { value: "TJS", label: "Tajikistani Somoni" },
    { value: "TMT", label: "Turkmenistan Manat" },
    { value: "TND", label: "Tunisian Dinar" },
    { value: "TOP", label: "Tongan Pa'anga" },
    { value: "TRY", label: "Turkish Lira" },
    { value: "TTD", label: "Trinidad and Tobago Dollar" },
    { value: "TWD", label: "New Taiwan Dollar" },
    { value: "TZS", label: "Tanzanian Shilling" },
    { value: "UAH", label: "Ukrainian Hryvnia" },
    { value: "UGX", label: "Ugandan Shilling" },
    { value: "USD", label: "United States Dollar" },
    {
      value: "UYU",
      label: "Uruguayan Peso",
    },
    {
      value: "UZS",
      label: "Uzbekistani Som",
    },
    {
      value: "VND",
      label: "Vietnamese Dong",
    },
    {
      value: "VUV",
      label: "Vanuatu Vatu",
    },
    {
      value: "WST",
      label: "Samoan Tala",
    },
    {
      value: "XAF",
      label: "Central African CFA Franc BEAC",
    },
    {
      value: "XCD",
      label: "East Caribbean Dollar",
    },
    {
      value: "XDR",
      label: "Special Drawing Rights",
    },
    {
      value: "XOF",
      label: "West African CFA Franc BCEAO",
    },
    {
      value: "XPF",
      label: "CFP Franc",
    },
    {
      value: "YER",
      label: "Yemeni Rial",
    },
    {
      value: "ZAR",
      label: "South African Rand",
    },
    {
      value: "ZMW",
      label: "Zambian Kwacha",
    },
  ];

  const getConvertedData = async () => {
    try {
      const response = await axios.get(
        `https://api.fastforex.io/convert?from=${selectedCurrencyFrom}&to=${selectedCurrencyTo}&amount=${amount}&api_key=e0cc4fea22-cfb2cf1bf9-s3hq87`
      );

      setResult(response.data.result[selectedCurrencyTo]);
    } catch (error) {
      setResult("Something Went Wrong! Check & Try Again!");
    }
  };

  return (
    <div className="converter">
      <div className="converter__container">
        <div className="converter__inputs">
          <div className="converter__input">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              name="amount"
              id="amount"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              placeholder="Type the amount"
            />
          </div>
          <div className="converter__input">
            <label htmlFor="from">From</label>
            <div>
              <CurrencyFlag currency={selectedCurrencyFrom} size="sm" />
              <select
                defaultValue={selectedCurrencyFrom}
                name="from"
                id="from"
                onChange={(e) => {
                  setSelectedCurrencyFrom(e.target.value);
                }}
              >
                {currencies.map((currency) => (
                  <option key={currency.value} value={currency.value}>
                    {currency.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="converter__input">
            <label htmlFor="to">To</label>
            <div>
              <CurrencyFlag currency={selectedCurrencyTo} size="sm" />
              <select
                defaultValue={selectedCurrencyTo}
                name="to"
                id="to"
                onChange={(e) => {
                  setSelectedCurrencyTo(e.target.value);
                }}
              >
                {currencies.map((currency) => (
                  <option key={currency.value} value={currency.value}>
                    {currency.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button onClick={getConvertedData}>Submit</button>
        </div>
        <p>
          result:{" "}
          {typeof result === "string" ? (
            <span style={{ color: "red" }}>{result}</span>
          ) : (
            <span style={{ color: "green" }}>{result}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Converter;
