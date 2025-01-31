import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row w-full max-w-[90rem] mx-auto">
        {/* Hero Image Section */}
        <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-[600px]">
          <Image id="img"
            src="/Images/Hero.png"
            alt="Modern furniture"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Text Section */}
        <div className="w-full lg:w-1/2 bg-[#FFF3E3] p-6 md:p-12 lg:p-16 flex flex-col justify-center">
          <span id="img" className="text-base md:text-lg mb-4">New Arrival</span>
          <h1 id="img" className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#B88E2F] mb-6">
            Discover Our <br /> New Collection
          </h1>
          <p id="img" className="text-gray-600 mb-8 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore
          </p>
          <button id="img" className="bg-[#B88E2F] text-white px-8 py-3 md:py-4 w-fit hover:bg-[#A47E2A] transition-colors duration-300">
            BUY NOW
          </button>
        </div>
      </div>

      
          </div>
        
      
    
  );
}