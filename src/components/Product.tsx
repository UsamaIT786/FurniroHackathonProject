'use client'

import { useState } from "react";
import Image from "next/image";

// Sample Card Data
export default function Products() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: 'Syltherine',
      price: "Rp 2.500.000",
      age: 30,
      image: "/Images/Hero.png",
      description: 'Stylish cafe chair',
    },
    {
      name: 'Jane Smith',
      price: "Rp 2.500.000",
      age: 25,
      image: "/Images/Images (1).png",
      description: 'A creative designer who loves creating stunning visuals.',
    },
    {
      name: 'Sam Wilson',
      price: "Rp 2.500.000",
      age: 28,
      image: "/Images/Images (2).png",
      description: 'A software engineer specializing in backend systems.',
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
      {/* Cart Icon with item count */}
      <div className="absolute top-4 right-4 p-2 bg-white shadow-lg rounded-full flex items-center space-x-2 cursor-pointer">
        <span className="text-xl">🛒</span>
        <span className="text-sm font-bold text-[#B88E2F]">{cart.length}</span> {/* Display cart item count */}
      </div>

      <div className="text-center py-4">
        <h2 id="img" className="text-3xl font-bold">Our Products</h2>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {data.map((card, index) => (
          <div className="card bg-white shadow-lg rounded-lg overflow-hidden" key={index}>
            <div className="relative">
              <img id="img"
                src={card.image}
                alt={card.name}
                className="w-full h-48 object-cover"
              />
              {/* Add to Cart Button (Initially hidden, will show on hover) */}
              <button
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-[#B88E2F] text-white px-4 py-2 rounded-md opacity-0 hover:opacity-100 transition-opacity"
                onClick={() => addToCart(card)}
              >
                Add to Cart
              </button>
            </div>
            <div className="p-4">
              <h5 className="font-bold text-lg">{card.name}</h5>
              <p className="text-sm text-gray-600">{card.description}</p>
              <h5 className="font-bold text-xl text-[#B88E2F]">{card.price}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart-section p-4 mt-6">
        <h3 className="text-2xl font-bold text-black mb-4">Shopping Cart</h3>
        <ul className="space-y-4">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
              <span className="text-blue-500 font-bold">{item.name} - {item.price}</span>
              <button
                className="text-red-500 font-semibold"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-6 mb-12">
        <button id="img" className="px-6 py-2 border-2 border-[#B88E2F] text-[#B88E2F] font-semibold rounded-md hover:bg-[#B88E2F] hover:text-white transition-all">
          Show More
        </button>
      </div>
    </>
  );
}
