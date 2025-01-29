import Image from "next/image";
import Living from "@/Images/living.png";
import Bedroom from "@/Images/bedroom.png";

export default function SubHero() {
  return (
    <>
      {/* Text Section */}
      <div className="subText text-center sm:text-left px-4 sm:px-8 py-6">
        <h3 id="img" className="font-extrabold text-center text-2xl sm:text-3xl mb-4">Browse The Range</h3>
        <p id="btn" className="text-gray-600 text-sm sm:text-base">
          Furniro, Market Place Builder, we believe that furniture is more than just functional—it's the foundation of creating a space that reflects your personality and enhances your lifestyle. Whether you're redesigning your living room, upgrading your bedroom, or setting up a home office, we offer a curated selection of stylish, high-quality furniture that fits every need and budget. From cozy sofas that invite relaxation to elegant dining sets perfect for family gatherings, our collection ensures that you don’t have to compromise on comfort or style. Browse our pieces today and transform your home into a space you’ll love!
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="imgArea grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 py-6">
        {/* Dining Image */}
        <div className="imgOne text-center">
          <Image id="img" src="/Images/dining.png" width={282} height={282} alt="Dining" className="rounded-lg shadow-md" />
          <h6 className="font-semibold mt-2">Dining</h6>
        </div>

        {/* Living Image */}
        <div className="imgTwo text-center">
          <Image id="img" src="/Images/living.png" width={282} height={282} alt="Living" className="rounded-lg shadow-md" />
          <h6 className="font-semibold mt-2">Living</h6>
        </div>

        {/* Bedroom Image */}
        <div className="imgThree text-center">
          <Image id="img" src="/Images/bedroom.png" width={282} height={282} alt="Bedroom" className="rounded-lg shadow-md" />
          <h6 className="font-semibold mt-2">Bedroom</h6>
        </div>
      </div>
    </>
  );
}
