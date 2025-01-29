import Image from "next/image";
import shophero from "@/Images/shophero.png";
import { IoIosArrowForward } from "react-icons/io";

export default function Cart() {
  return (
    <>
      <div className="relative">
        <Image src={'/Images/shophero.png'} alt="Picture of the author"width={2000}height={2000} />
        <div className="absolute top-[50%] left-[50%] flex justify-center flex-col items-center ">
          <h3 id="img" className="font-bold text-[1.5rem]">Cart</h3>
          <div className="flex items-center">
            <h3 id="img">Home</h3>
            <IoIosArrowForward />
            <h3 id="img">cart</h3>
          </div>
        </div>
        {/* <div> */}
        {/* </div> */}
      </div>

      <div className="">
        <div className=" producDetails flex justify-around items-center p-4 w-[60%] h-[4rem] bg-[#F9F1E7] ">
          <h2 id="img">Product</h2>
          <h2 id="img">Price</h2>
          <h2 id="img">Quantity</h2>
          <h2 id="img">Subtotal</h2>
        </div> 
        <div>

<br />            
<div className="flex justify-evenly gap-1">
            <Image id="img" src="/Images/sofaaa.png" width={250} height={250} alt="Picture of the author" />
            <p>Asgaard sofa</p>
            <p>Rs. 250,000.00</p>
            <input type="number" />
            <p>Rs. 250,000.00</p>


        <div className="cartTotal  bg-[#F9F1E7] text-center w-[20rem] h-[15rem] pt-[4rem] ">
          <h2 className="font-bold text-[1.5rem]">Cart Totals</h2>
          <p><span className="font-bold">Subtotal </span>  Rs. 250,000.00</p>
          <p><span className="font-bold">Total</span> Rs. 250,000.00</p>

          <button id="btn" className="mt-5 rounded-md border-gray-900 border-2 p-2 pr-3  pl-3">Check Out</button>
        </div>
            </div>
        </div>

      </div>

      <div className="mb-3 mt-10 flex justify-evenly items-center p-2 w-[100%] h-[8rem] bg-[#F9F1E7]">
        <div className=" ">
          <Image id="img"
            src="/Images/Group.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />

          <h4 className="font-bold">High Quality</h4>
          <p>crafted from top materials</p>
        </div>
        <div>
          <Image id="img"
            src="/Images/warr.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div>
          <Image id="img"
            src="/Images/vector.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
        <div>
          <Image id="img"
            src="/Images/customer.png"
            width={40}
            height={40}
            alt="Picture of the author"
          />
          <h4 className="font-bold">24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </>
  );
}