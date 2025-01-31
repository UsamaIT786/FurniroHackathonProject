import Image from "next/image";
import shophero from "@/Images/shophero.png";
import { IoIosArrowForward } from "react-icons/io";

export default function Cart() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <Image id="img" src={'/Images/shophero.png'} alt="Shop Hero" width={2000} height={1000} layout="responsive" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center flex-col items-center text-center px-4 sm:px-8 md:px-16">
          <h3 id="img" className="font-bold text-[2.5rem] sm:text-2xl md:text-3xl text-balck">Cart</h3>
          <div className="flex justify-center items-center text-black mt-2">
            <h3 id="img" className="text-sm sm:text-base">Home</h3>
            <IoIosArrowForward className="mx-2 text-sm sm:text-base" />
            <h3 id="img" className="text-sm sm:text-base">Cart</h3>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="producDetails flex flex-col sm:flex-row justify-between items-center p-4 sm:p-8 w-full bg-[#F9F1E7]">
        <div className="w-full sm:w-[60%]">
          <h2 id="img" className="font-semibold text-xl sm:text-2xl">Product</h2>
        </div>
        <div className="w-full sm:w-[20%]">
          <h2 id="img" className="font-semibold text-xl sm:text-2xl">Price</h2>
        </div>
        <div className="w-full sm:w-[15%]">
          <h2 id="img" className="font-semibold text-xl sm:text-2xl">Quantity</h2>
        </div>
        <div className="w-full sm:w-[20%]">
          <h2 id="img" className="font-semibold text-xl sm:text-2xl">Subtotal</h2>
        </div>
      </div>

      {/* Product Item */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-8 w-full gap-4 sm:gap-8">
        <div className="flex items-center gap-4 sm:gap-8">
          <Image id="img" src="/Images/sofaaa.png" width={150} height={150} alt="Sofa" className="object-cover rounded-lg" />
          <p id="btn" className="text-sm sm:text-base">Asgaard sofa</p>
        </div>
        <p id="btn" className="text-sm sm:text-base">Rs. 250,000.00</p>
        <input type="number" className="w-16 sm:w-20 h-10 text-center border rounded-md" defaultValue={1} />
        <p id="btn" className="text-sm sm:text-base">Rs. 250,000.00</p>
      </div>

      {/* Cart Total Section */}
      <div className="cartTotal bg-[#F9F1E7] text-center w-full sm:w-[20rem] h-[15rem] pt-4 sm:pt-8 mx-auto mb-8 sm:mb-16 rounded-lg">
        <h2 id="img" className="font-bold text-[1.5rem] sm:text-2xl mb-4">Cart Totals</h2>
        <p id="btn"><span className="font-bold">Subtotal: </span> Rs. 250,000.00</p>
        <p id="btn"><span className="font-bold">Total: </span> Rs. 250,000.00</p>
        <button id="img" className="mt-5 rounded-md border-gray-900 border-2 p-2 pr-3 pl-3 text-sm sm:text-base">Check Out</button>
      </div>

      {/* Footer Section with Icons */}
      <div className="mb-3 mt-10 flex flex-col sm:flex-row justify-evenly items-center p-2 sm:p-8 w-full bg-[#F9F1E7]">
        <div className="flex flex-col items-center">
          <Image id="img" src="/Images/Group.png" width={40} height={40} alt="High Quality" />
          <h4 id="img" className="font-bold">High Quality</h4>
          <p id="btn" className="text-center">Crafted from top materials</p>
        </div>
        <div className="flex flex-col items-center mt-8 sm:mt-0">
          <Image id="img" src="/Images/warr.png" width={40} height={40} alt="Warranty Protection" />
          <h4 id="img" className="font-bold">Warranty Protection</h4>
          <p id="btn" className="text-center">Over 2 years</p>
        </div>
        <div className="flex flex-col items-center mt-8 sm:mt-0">
          <Image id="img" src="/Images/vector.png" width={40} height={40} alt="Free Shipping" />
          <h4 id="img" className="font-bold">Free Shipping</h4>
          <p id="btn" className="text-center">Orders over 150$</p>
        </div>
        <div className="flex flex-col items-center mt-8 sm:mt-0">
          <Image id="img" src="/Images/customer.png" width={40} height={40} alt="24/7 Support" />
          <h4 id="img" className="font-bold">24 / 7 Support</h4>
          <p id="btn" className="text-center">Dedicated support</p>
        </div>
      </div>
    </>
  );
}
