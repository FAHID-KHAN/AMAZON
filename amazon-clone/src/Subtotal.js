import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./State"

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType = {"text"}
      thousandSeperator = {true}
      prefix={"$"}
      />
      <button>Proceed To Checkout</button>
      
    </div>
  )
}

export default Subtotal
