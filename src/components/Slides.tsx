import Image from "next/image";
import inner from '@/Images/inner.png';
import sideinner from "@/Images/sideinner.png";

export default function SlideSection() {
  return (
    <>
      <div className="slideSection bg-[#FCF8F3] py-10 px-4 sm:px-8">
        {/* Text Section */}
        <div className="slideText text-center sm:text-left mb-8 sm:mb-0">
          <h4 id="img" className="font-extrabold text-2xl sm:text-3xl text-[#333]">
            50+ Beautiful Room Inspirations
          </h4>
          <p id="img" className="text-base sm:text-lg text-gray-700 mt-4 mb-6">
            Our designers have already created many beautiful room prototypes to
            inspire you.
          </p>
          <button id="btn" className="bg-[#B88E2F] text-white py-2 px-4 rounded-md hover:bg-[#9e7a2e] transition duration-300">
            Explore More
          </button>
        </div>

        {/* Image Section */}
        <div className="slideImages flex justify-center gap-6 sm:gap-10">
          <div className="w-[200px] sm:w-[250px] h-[200px] sm:h-[250px]">
            <Image id="img"
              src={"/Images/inner.png"}
              width={250}
              height={250}
              alt="Beautiful room inspiration"
              className="object-cover rounded-md shadow-lg"
            />
          </div>
          <div className="w-[200px] sm:w-[250px] h-[200px] sm:h-[250px]">
            <Image id="img"
              src={'/Images/sideinner.png'}
              width={250}
              height={250}
              alt="Room design inspiration"
              className="object-cover rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
