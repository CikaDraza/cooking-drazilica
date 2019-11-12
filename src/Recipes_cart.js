import React, {useState} from 'react';  
  
 const Cart = ()=> {

  const [isSave, increment] = useState(0);

  const incrementItems = () => {
    increment(isSave + 1);
  };

  return(
    <div className="items-cart">
      <span className="num-items">{isSave}</span>
      <img src="carte.png" alt="icon"  onClick={incrementItems} />
    </div>
  )
}

export default Cart