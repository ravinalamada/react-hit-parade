import React, {useContext, useState} from 'react';
import { Context } from '../Context';

function Cart() {

  // Grab the state from the Context
  const { cardItems, placeHolderBtn, removeItem} = useContext(Context);
  const [orderBtnText, setOrderBtnText ] = useState('Buy');

  function handleOrder() {
    setOrderBtnText('Ordering...');
    setTimeout(() => {
      console.log('Buy');
      placeHolderBtn();
    }, 3000)
  }

  // Check if there is something in the card
  const carts = cardItems.length > 0;

  // Calculate the total price of the songs
  const total = cardItems.length * 100;

  return (
    <>
    <ul>
    {carts && cardItems.map(item => (
      <li key={item.id} className="container cart--items">
      <div className="cart--container">
      <i className="ri-delete-bin-line trash" onClick={() => removeItem(item.id)}></i>
      <div>
      <h2>{item.title}</h2>
      <span>{item.singerName}</span>
      </div>
      </div>
      <p>{item.price}</p>
      </li>
      ))}
      </ul>
      <div className="cart--wrapper">
      { carts ? <button onClick={handleOrder} className="submit--item">{orderBtnText}</button> : <h3>You have no item in your card</h3>}
      { carts && <p className="total-cost">Total:{total.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>}
      </div>
      </>
      );
    }

    export default Cart;
