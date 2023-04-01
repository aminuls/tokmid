import React from "react";
import "./StorageCart.css";

const StorageCart = ({ cart, total }) => {
   // console.log(add);

   return (
      <nav className="cart">
         <div className="time-cart">
            <h3>Spent time on read: {total}</h3>
         </div>
         <div className="bookmarket">
            <h4>Bookmarked Blogs : {cart.length}</h4>
         </div>
      </nav>
   );
};

export default StorageCart;
