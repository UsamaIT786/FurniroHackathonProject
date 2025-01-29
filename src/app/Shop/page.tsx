import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import ShopBelowHero from "@/components/ShopBelowHero";

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

  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <Image src="/Images/shophero.png" alt="Shop Hero" width={2000} height={1000} className="w-full h-auto object-cover" />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h3 id="img" className="text-2xl sm:text-4xl font-bold text-black">Shop</h3>
          <div className="flex justify-center items-center text-black mt-2">
            <h3 id="img">Home</h3>
            <IoIosArrowForward className="mx-2 text-xl" />
            <h3 id="img">Shop</h3>
          </div>
        </div>
      </div>

      {/* Below Hero Section */}
      <ShopBelowHero />

      {/* Product Cards */}
      <div className="cardsContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 py-8">
        {data.map((card, index) => (
          <div key={index} className="card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <Image id="img" src={card.image} alt={card.name} width={300} height={300} className="w-full h-[200px] object-cover rounded-md" />
            <div className="card-body mt-4">
              <h5 className="card-title font-semibold text-lg">{card.name}</h5>
              <p className="card-text text-gray-600 text-sm">{card.description}</p>
              <h5 className="font-bold text-xl mt-2">{card.price}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-2 justify-center py-4">
        <button className="w-[2.5rem] h-[2.5rem] bg-[#F9F1E7] hover:bg-[#B88E2F] text-white rounded-md cursor-pointer">1</button>
        <button className="w-[2.5rem] h-[2.5rem] bg-[#F9F1E7] hover:bg-[#B88E2F] text-white rounded-md cursor-pointer">2</button>
        <button className="w-[2.5rem] h-[2.5rem] bg-[#F9F1E7] hover:bg-[#B88E2F] text-white rounded-md cursor-pointer">3</button>
        <button className="w-[4rem] h-[2.5rem] bg-[#F9F1E7] hover:bg-[#B88E2F] text-white rounded-md cursor-pointer">Next</button>
      </div>

      {/* Additional Information Section */}
      <div className="flex justify-evenly items-center bg-[#F9F1E7] p-6">
        <div className="text-center">
          <Image id="img" src="/Images/Group.png" width={40} height={40} alt="High Quality" />
          <h4 className="font-bold">High Quality</h4>
          <p>Crafted from top materials</p>
        </div>
        <div className="text-center">
          <Image id="img" src="/Images/warr.png" width={40} height={40} alt="Warranty Protection" />
          <h4 className="font-bold">Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div className="text-center">
          <Image id="img" src="/Images/vector.png" width={40} height={40} alt="Free Shipping" />
          <h4 className="font-bold">Free Shipping</h4>
          <p>Order over 150$</p>
        </div>
        <div className="text-center">
          <Image id="img" src="/Images/customer.png" width={40} height={40} alt="24/7 Support" />
          <h4 className="font-bold">24/7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </>
  );
}
   