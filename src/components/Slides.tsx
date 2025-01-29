import Image from "next/image";
import inner from '@/Images/inner.png'
import Sideinner from "@/Images/Sideinner.png" 
export default function () {
  return (
    <>
      <div className="slideSection bg-[#FCF8F3]">
        <div className="slideText pt-9">

        <h4 id="btn" className=" font-extrabold text-[2rem] ">50+ Beautiful rooms inspiration</h4>
        <p id="btn">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <button id="img" className="bg-[#B88E2F] p-2">Exlore More</button>
        </div>
        <div className="slideImages">
        <Image id="img" src={'/Images/inner.png'} width={250}height={250}  alt="Picture of the author" />

        </div>
        <div className="slideImages">
        <Image id="img" src={'/Images/Sideinner.png'}height={250} width={250} alt="Picture of the author" />

        </div>
      </div>
    </>
  );
}