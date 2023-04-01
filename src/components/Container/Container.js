import React, { useEffect, useState } from "react";
import Blogs from "../Blogs/Blogs";
import StorageCart from "../StorageCart/StorageCart";
import { addToDb, getIconCart } from "../utilities/Utilities";
import "./Container.css";

const Container = () => {
   const [containers, setContainer] = useState([]);
   const [cart, setCart] = useState([]);

   useEffect(() => {
      fetch("data.json")
         .then((res) => res.json())
         .then((data) => setContainer(data));
   }, []);

   const addIconHandler = (containers) => {
      const newCart = [...cart, containers];
      setCart(newCart);
      // addToDb(containers);
   };
   // console.log(containers);
const [total, setTotal] = useState(0)
   const add = (time = 0) => {
      setTotal(total + time)
   };
   return (
      <nav className="container">
         <div>
            {containers.map((container) => (
               <Blogs key={container.id} container={container} addIconHandler={addIconHandler} add={add}></Blogs>
            ))}
         </div>
         <div>
            <StorageCart cart={cart} total={total}></StorageCart>
         </div>
      </nav>
   );
};

export default Container;
