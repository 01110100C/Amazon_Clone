import React from 'react'; 
import "./Product.css"; 

function Product({title, image, price, rating}) {
  return (

    <div className="product">


            {/* First Product */}
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className="product__rating">

                {/* Rating function to automatically apply how ever many stars are needed
                for the rating given on the home page */}

                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐️</p>
                ))}

            </div>
        </div>
        <img className="product__image" src={image} alt={title} />

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