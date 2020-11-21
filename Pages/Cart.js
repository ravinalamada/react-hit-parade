import React, {useContext, useState} from 'react';
import { Context } from '../Context';

function Cart() {

  const { cardItems, placeHolderBtn} = useContext(Context);
  const [orderBtnText, setOrderBtnText ] = useState('Buy');

     console.log(cardItems);
    function handleOrder() {
      setOrderBtnText('Buy...');
      setTimeout(() => {
        console.log('Buy');
        placeHolderBtn();
      }, 3000)
    }

    const carts = cardItems.length > 0;
    const total = cardItems.length * 100;

    return (
        <>
          <ul className="container">
            {carts && cardItems.map(item => (
              <li key={item.id} className="list--cart">
                <div>
                  <h2>{item.title}</h2>
                  <span>{item.singerName}</span>
                </div>
                <p>{item.price}</p>
              </li>
            ))}
          </ul>
          <div className="cart--wrapper">
            { carts ? <button onClick={handleOrder}>{orderBtnText}</button> : <p>You have no item in your card</p>}
            <p className="total-cost">Total:{total.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
          </div>
        </>
      );
    }

    export default Cart;
