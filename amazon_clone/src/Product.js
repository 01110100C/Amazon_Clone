import React from 'react'; 
import "./Product.css"; 

function Product() {
  return (

    <div className="product">


            {/* First Product */}
        <div className="product__info">
            <p>The Lean Startup</p>
            <p className="product__price">
                <small>$</small>
                <strong>19.99</strong>
            </p>

            <div className="product__rating">
                <p></p>
            </div>
        </div>
        {/* Find Image of item
           <img src=""
        
        */}

        {/* Second Product */}
        <button>Add To Basket</button>

        <div className="product__info">
            <p>Apple Watch Gen 5</p>
            <p className="product__price">
                <small>$</small>
                <strong>599.99</strong>
            </p>

            <div className="product__rating">
                <p></p>
            </div>
        </div>
        {/* Find Image of item
           <img src=""
        
        */}
        <button>Add To Basket</button>




    </div>
  )
}

export default Product; 