import Image from "next/image";
import inner from '@/Images/inner.png';

export default function SlideSection() {
  return (
    <>
      <div className="slideSection bg-[#FCF8F3] py-10 sm:py-16">
        {/* Text Section */}
        <div className="slideText text-center sm:text-left px-4 sm:px-16">
          <h4 id="img" className="font-extrabold text-2xl sm:text-3xl md:text-4xl mb-4">
            50+ Beautiful Rooms Inspiration
          </h4>
          <p id="img" className="text-sm sm:text-base md:text-lg mb-6">
            Our designer already made a lot of beautiful prototype rooms that inspire you.
          </p>
          <button id="img" className="bg-[#B88E2F] text-white py-2 px-6 rounded-md text-sm sm:text-base">
            Explore More
          </button>
        </div>

        {/* Images Section */}
          {/* First Image */}
            <Image id="img" 
              src={'/Images/inner.png'} 
              alt="Interior Design Inspiration" 
              layout="responsive"
              width={500} 
              height={500} 
              className="flex-row"
            />
          </div>
         
    </>
  );
}
