import Image from "next/image";
import shophero from "@/Images/shophero.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneFilled } from "react-icons/tb";
import { TbClockHour4Filled } from "react-icons/tb";

export default function () {
  return (
    <>
      <div className="relative">
        <Image src={'/Images/shophero.png'} alt="Shop Hero Image" width={2000} height={2000} className="w-full h-auto object-cover" />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] flex justify-center flex-col items-center">
          <h3 id="img" className=" text-[2.5rem] text-balck font-bold font-sans">Contact</h3>
          <div className="flex items-center text-black font-bold  ">
            <h3 id="img">Home</h3>
            <IoIosArrowForward />
            <h3 id="img">contact</h3>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <h2 id="img" className="font-extrabold text-[2rem]">Get In Touch With Us</h2>
        <p id="img" className="mt-4 text-gray-600">
          For More Information About Our Product & Services. Please Feel Free To Drop Us
          <br /> An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-evenly leading-8 mt-6 space-y-6 sm:space-y-0 sm:space-x-8">
        <div className="w-[80%] sm:w-[14rem] text-center sm:text-left">
          <div className="flex items-start justify-center sm:justify-start space-x-3">
            <FaLocationDot className="text-[1.5rem] text-[#B88E2F]" />
            <div>
              <h2 id="btn" className="font-bold">Address</h2>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          <div className="flex items-start justify-center sm:justify-start space-x-3 mt-6">
            <TbPhoneFilled className="text-[1.5rem] text-[#B88E2F]" />
            <div>
              <h2 id="btn" className="font-bold">Phone</h2>
              <p>Mobile: +(84) 546-6789 </p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start justify-center sm:justify-start space-x-3 mt-6">
            <TbClockHour4Filled className="text-[1.5rem] text-[#B88E2F]" />
            <div>
              <h2 id="btn" className="font-bold">Working Time</h2>
              <p>Monday-Friday: 9:00 - 22:00 </p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <div className="w-[80%] sm:w-[17rem]">
          <form className="flex flex-col space-y-4">
            <label id="img" htmlFor="name">Name</label>
            <input type="text" id="name" className="border-gray-200 border-2 p-2 rounded-md w-full" placeholder="name" />

            <label id="img" htmlFor="email">Email</label>
            <input type="email" id="email" className="border-gray-200 border-2 p-2 rounded-md w-full" placeholder="email" />

            <label id="img" htmlFor="subject">Subject</label>
            <input type="text" id="subject" className="border-gray-200 border-2 p-2 rounded-md w-full" placeholder="optional" />

            <label id="img" htmlFor="message">Message</label>
            <textarea id="message" className="border-gray-200 border-2 p-2 rounded-md w-full" placeholder="Hi! I’d like to ask about"></textarea>

            <button id="btn" className="bg-[#B88E2F] text-white mt-6 p-3 rounded-md w-full sm:w-[7rem] mx-auto sm:mx-0">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 mb-10 flex flex-col sm:flex-row justify-evenly items-center bg-[#F9F1E7] p-4 space-y-6 sm:space-y-0 sm:space-x-8">
        <div className="text-center sm:text-left">
          <Image id="img" src="/Images/Group.png" width={40} height={40} alt="High Quality" />
          <h4 className="font-bold">High Quality</h4>
          <p>Crafted from top materials</p>
        </div>
        <div className="text-center sm:text-left">
          <Image id="img" src="/Images/warr.png" width={40} height={40} alt="Warranty Protection" />
          <h4 className="font-bold">Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div className="text-center sm:text-left">
          <Image id="img" src="/Images/vector.png" width={40} height={40} alt="Free Shipping" />
          <h4 className="font-bold">Free Shipping</h4>
          <p>Order over 150 $</p>
        </div>
        <div className="text-center sm:text-left">
          <Image id="img" src="/Images/customer.png" width={40} height={40} alt="24/7 Support" />
          <h4 className="font-bold">24/7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </>
  );
}
