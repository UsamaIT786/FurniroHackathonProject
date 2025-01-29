import Image from "next/image";
import Living from "@/Images/living.png";
import Bedroom from "@/Images/bedroom.png";

export default function SubHero() {
  return (
    <>
    <br />
    <br />
    <br />
    <br />
      <div className="subText text-center mb-8 sm:mb-12">
        <h3 id="img" className="font-extrabold text-2xl sm:text-3xl text-[#333]">Browse The Range</h3>
        <p id="img" className="text-base sm:text-lg text-gray-700 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      
      {/* Image Section */}
      <div className="imgArea flex flex-wrap justify-center gap-8 sm:gap-10">
        
        {/* Dining Section */}
        <div className="imgOne w-[282px] h-[282px] text-center">
          <Image
            id="img"
            src="/Images/dining.png"
            width={282}
            height={282}
            alt="Dining"
            className="object-cover rounded-md shadow-lg"
          />
          <h6 className="mt-4 font-semibold text-lg">Dining</h6>
        </div>

        {/* Living Section */}
        <div className="imgTow w-[282px] h-[282px] text-center">
          <Image
            id="img"
            src="/Images/living.png"
            width={282}
            height={282}
            alt="Living"
            className="object-cover rounded-md shadow-lg"
          />
          <h6 className="mt-4 font-semibold text-lg">Living</h6>
        </div>

        {/* Bedroom Section */}
        <div className="imgThree w-[282px] h-[282px] text-center">
          <Image
            id="img"
            src="/Images/bedroom.png"
            width={282}
            height={282}
            alt="Bedroom"
            className="object-cover rounded-md shadow-lg"
          />
          <h6 className="mt-4 font-semibold text-lg">Bedroom</h6>
        </div>
        
      </div>
    </>
  );
}
