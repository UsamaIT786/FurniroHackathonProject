import Image from "next/image";
import shophero from "@/Images/shophero.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneFilled, TbClockHour4Filled } from "react-icons/tb";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <Image src="/Images/shophero.png" alt="Shop Hero" width={2000} height={2000} />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h3 id="img" className="font-bold text-2xl sm:text-3xl">Contact</h3>
          <div className="flex justify-center items-center mt-2">
            <h3 id="img">Home</h3>
            <IoIosArrowForward />
            <h3 id="img">Contact</h3>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="text-center mt-6 px-4">
        <h2 id="img" className="font-extrabold text-2xl sm:text-3xl">Get In Touch With Us</h2>
        <p id="img" className="text-gray-600 mt-4 sm:text-md">
          For more information about our products & services, feel free to drop us an email. Our staff is always ready to assist you. Do not hesitate!
        </p>
      </div>

      {/* Contact Details Section */}
      <div className="flex justify-evenly leading-8 flex-wrap mt-6 px-4">
        {/* Address Section */}
        <div className="w-full sm:w-[14rem] mt-6 flex items-start gap-4">
          <FaLocationDot className="text-2xl text-[#B88E2F]" />
          <div>
            <h2 id="btn" className="font-bold">Address</h2>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
        </div>

        {/* Phone Section */}
        <div className="w-full sm:w-[14rem] mt-6 flex items-start gap-4">
          <TbPhoneFilled className="text-2xl text-[#B88E2F]" />
          <div>
            <h2 id="btn" className="font-bold">Phone</h2>
            <p>Mobile: +(84) 546-6789</p>
            <p>Hotline: +(84) 456-6789</p>
          </div>
        </div>

        {/* Working Time Section */}
        <div className="w-full sm:w-[14rem] mt-6 flex items-start gap-4">
          <TbClockHour4Filled className="text-2xl text-[#B88E2F]" />
          <div>
            <h2 id="btn" className="font-bold">Working Time</h2>
            <p>Monday - Friday: 9:00 - 22:00</p>
            <p>Saturday - Sunday: 9:00 - 21:00</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mt-6 px-4">
        <form className="flex flex-col ml-auto mr-auto items-center justify-center gap-4">
          <label id="img" htmlFor="name" className="text-lg font-medium">Name</label>
          <input
            type="text"
            id="name"
            className="border-gray-200 border-2 p-2 rounded-md w-full sm:w-[17rem]"
            placeholder="Your Name"
          />

          <label id="img" htmlFor="email" className="text-lg font-medium">Email</label>
          <input
            type="email"
            id="email"
            className="border-gray-200 border-2 p-2 rounded-md w-full sm:w-[17rem]"
            placeholder="Your Email"
          />

          <label id="img" htmlFor="subject" className="text-lg font-medium">Subject</label>
          <input
            type="text"
            id="subject"
            className="border-gray-200 border-2 p-2 rounded-md w-full sm:w-[17rem]"
            placeholder="Subject (optional)"
          />

          <label id="img" htmlFor="message" className="text-lg font-medium">Message</label>
          <textarea
            id="message"
            className="border-gray-200 border-2 p-2 rounded-md w-full sm:w-[17rem] h-[8rem]"
            placeholder="Hi! I'd like to ask about..."
          ></textarea>

          <button
            id="btn"
            type="submit"
            className="self-center bg-[#B88E2F] text-white mt-6 p-3 w-[7rem] rounded-md"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <div className="mt-6 mb-6 flex justify-evenly items-center p-2 w-full h-[8rem] bg-[#F9F1E7]">
        <div className="flex flex-col items-center">
          <Image id="img" src="/Images/Group.png" width={40} height={40} alt="High Quality" />
          <h4 className="font-bold">High Quality</h4>
          <p>Crafted from top materials</p>
        </div>
        <div className="flex flex-col items-center">
          <Image id="img" src="/Images/warr.png" width={40} height={40} alt="Warranty Protection" />
          <h4 className="font-bold">Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>
        <div className="flex flex-col items-center">
          <Image id="img" src="/Images/vector.png" width={40} height={40} alt="Free Shipping" />
          <h4 className="font-bold">Free Shipping</h4>
          <p>Order over $150</p>
        </div>
        <div className="flex flex-col items-center">
          <Image id="img" src="/Images/customer.png" width={40} height={40} alt="24/7 Support" />
          <h4 className="font-bold">24/7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </>
  );
}
