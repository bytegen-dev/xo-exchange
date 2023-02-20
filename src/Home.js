import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home(props) {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?base=NGN&symbols=USD,EUR,GBP,CNY,BRL,CRC,GHS,LRD,CAM,SGD,XOF,AED,MAD,MXN,AUD"
        );
        setCurrencies(response.data.rates);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrencies();
  }, []);

  function reload() {
    window.location.reload();
  }

  function formatCurrency(amount, code) {
    if (amount === undefined) {
      return "Loading...";
    } else {
      return (
        <div className="currency-container">
          <div className="currency-name">{code}</div>
          <div className="currency-value">
            {amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
        </div>
      );
    }
  }
  

  return (
    <div className={props.className}>
      <div className="welcome">
        <div onClick={reload} className="hello">
          <img src="currency.png" alt="xoxchange-icon" />{" "}
          <span>NGN</span>
        </div>
        <div onClick={props.toggleDarkMode} className="theme">
          <i className="fa fa-adjust" />
        </div>
      </div>
      <div className="featured">
        <div className="featured--about">
          <span>Featured</span>
        </div>
        <div className="featured-items-holder">
            <div className="featured--item">
                <div>USD</div>
                {formatCurrency(currencies.USD)} 
            </div>
            <div className="featured--item">
                <div>EUR</div> 
                {formatCurrency(currencies.EUR)}
            </div>
            <div className="featured--item">
                <div>GBP</div> 
                {formatCurrency(currencies.GBP)}
            </div>
            <div className="featured--item">
                <div>CNY</div> 
                {formatCurrency(currencies.CNY)}
            </div>
          {/* <div className="featured--item">{formatCurrency(currencies.EUR)}</div>
          <div className="featured--item">{formatCurrency(currencies.GBP)}</div>
          <div className="featured--item">{formatCurrency(currencies.CNY)}</div> */}
        </div>
      </div>
      <div className="watchlist">
        <div className="watchlist--about">
          <span>Watchlist</span> <span>(NGN)</span>
        </div>
        <div className="watchlist-items-holder" onTouchStart={props.onTouchStart}>
          {currencies &&
            Object.entries(currencies).map(([key, value]) => (
              <div className="watchlist--item" key={key}>
                <div>{key}</div>
                <div>{formatCurrency(value)}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
