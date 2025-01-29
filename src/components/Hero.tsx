import Image from "next/image";
import HeroImage from "@/Pictures/Hero.png";

export default function Hero() {
  return (
    <>
      {/* Hero Section with Responsive Image and Text */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
        <Image 
          src="/Images/Hero.png" 
          alt="Hero Image" 
          width={1440} 
          height={100} 
          className="object-cover w-full h-full"
        />
        
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center text-black px-4 sm:px-8 md:px-16">
          <h6 id="img" className="text-lg font-semibold mb-2">New Arrival</h6>
          <h3 id="img" className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
            Discover Our <br /> New Collection
          </h3>
          <p id="img" className="text-base sm:text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore.
          </p>
          <button id="btn" className="buyBtn bg-green-500 text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-green-600 transition duration-200">
            BUY NOW
          </button>
        </div>
      </div>
    </>
  );
}
