

"use client"

import Image from "next/image";
import shophero from "@/Images/shophero.png";
import { IoIosArrowForward } from "react-icons/io";
import Products from "@/components/Product";
import ShopBelowHero from '@/components/ShopBelowHero'
import { useState } from "react";

export default function ShopHero() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "/Images/Images (1).png",
      description: "Stylish cafe chair",
    },
    {
      name: "Jane Smith",
      price: "Rp 2.500.000",
      age: 25,
      image: "/Images/Images (2).png",
      description: "A creative designer who loves creating stunning visuals.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/Images/Images (3).png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/Images/Images (4).png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/Images/Images.png",
      description: "A software engineer specializing in backend systems.",
    },
    {
      name: "Sam Wilson",
      price: "Rp 2.500.000",
      age: 28,
      image: "/Images/image 8.png",
      description: "A software engineer specializing in backend systems.",
    },
    
  ];

  // State for the cart
    const [cart, setCart] = useState<Card[]>([]);
  
    // Function to add product to cart
    const addToCart = (product: Card) => {
      setCart((prevCart) => [...prevCart, product]);
    };
  
    // Function to remove product from cart
    const removeFromCart = (product: Card) => {
      setCart((prevCart) => prevCart.filter((item) => item.name !== product.name));
    };
  
    return (
      <>
        <div className="header">
          {/* Cart Icon with item count */}
          <div className="cart-icon">
            <span></span>
            <span>{cart.length}</span> {/* Display cart item count */}
          </div>
        </div>
  
        <div className="product">
          <h2 id="img" className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
        </div>
  
        <div className="cardsContainer">
          {data.map((card, index) => (
            <div className="card" key={index} style={{ width: "15rem" }}>
              <div className="card-img-container" style={{ position: 'relative' }}>
                <img
                  id="img"
                  src={card.image}
                  style={{ width: "18rem", height: "18rem" }}
                  className="card-img-top"
                />
                {/* Add to Cart Button (Initially hidden, will show on hover) */}
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(card)}
                >
                  Add to Cart
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                  {card.name}
                </h5>
                <p className="card-text">{card.description}</p>
                <h5 className="card-title" style={{ fontWeight: "bold" }}>
                  {card.price}
                </h5>
              </div>
            </div>
          ))}
        </div>
  
        {/* Cart Section */}
        <div className="cart-section">
          <h3 id="btn" className="text-2xl ml-20">Shopping Cart</h3>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <div>
                  <span className="text-blue-500 font-bold ml-20">{item.name} - {item.price}</span>
                  {/* Remove from Cart Button */}
                  <button id="button" onClick={() => removeFromCart(item)} style={{ marginLeft: '10px' }}> 
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
  
        <div className="flex items-center justify-center mb-12">
          <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F]">Show More</button>
        </div>
  
        <style jsx>{`
          .card-img-container {
            position: relative;
          }
          .add-to-cart-btn {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #B88E2F;
            color: white;
            padding: 8px 16px;
            border: none;
            display: none; /* Initially hidden */
          }
          .card-img-container:hover .add-to-cart-btn {
            display: block; /* Show the button on hover */
          }
  
          .cart-icon {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 1.5rem;
            cursor: pointer;
          }
  
          .cart-icon span {
            margin-left: 5px;
            font-size: 1.2rem;
            color: #B88E2F;
          }
        `}</style>
      </>
    );
  }