import React,{useState} from 'react'
import './Cart.css';

const products = [
  { id: 1,image:"https://vn-live-01.slatic.net/p/edd4c2c11d43163f185b2be499ad3dde.png", name: 'Hảo Hảo', price: 10 },
  { id: 2,image:"https://unibenfoods.com/Data/Sites/1/News/2562/sanpham_3mien_bhrt.png" ,name: 'Ba Miền', price: 15 },
  { id: 3,image:"https://lh3.googleusercontent.com/KVMOToa-ZeFua0SXYU62mJDpnchqSQ7ATaJCcZefKbVUE5q4QClT2b1bihlUQW4tO4-Rn-ArW6YRTH71HuFTVsKACZ0cgU1j6A" ,name: 'Cung Đình', price: 20 },
  { id: 4,image:"https://vietmartjp.com/wp-content/uploads/2021/07/mi-omachi-tom-chua-cay-goi-vietmart.jpg" ,name: 'Omachi', price: 25 },

];

export default function Cart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const buy= 1000000000-total
  

  return (
    <>
<div className="main">
  <div className='main_buy'>
  <p className='buy'>To spend ${buy}  You have a Lot of money</p> 
  </div>
      
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt="" style={{width:'200px',height:'200px'}} />
            <div className='btn'>
            <p>{product.name}</p>
            <p>${product.price}</p>
            </div>
            <button className='' onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Your Cart</h2>
        <button className='button' onClick={clearCart}>Clear Cart</button>
        {cart.map((item) => (
          <div key={item.id} className="art-item">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <input className='input'
              type="number"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
            />
          </div>
        ))}
        <p className='total'>Total: ${total}</p>
        
      </div>
    </div>
    </>
  )
}



 
  
    
  



