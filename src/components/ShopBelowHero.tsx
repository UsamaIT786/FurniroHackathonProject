import Image from "next/image";
import Filter from "@/Images/filter.png";

export default function BlowHero() {
  return (
    <>
      <div className="w-full h-16 bg-[#F9F1E7] flex flex-col sm:flex-row justify-between items-center px-4 py-2">
        {/* First Row */}
        <div className="flex items-center space-x-3">
          <Image src={'/Images/filter.png'} height={30} width={30} alt="Filter Icon" />
          <p className="font-semibold">Filter</p>
          <p className="text-gray-600">| Showing 1–16 of 32 results</p>
        </div>

        {/* Second Row */}
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <p className="font-semibold">Show</p>
          <input
            className="w-16 h-10 bg-gray-200 text-black text-center rounded-md"
            type="text"
            placeholder="16"
          />
          <p className="font-semibold">Sort by</p>
          <input
            className="w-32 h-10 bg-gray-200 text-black text-center rounded-md"
            type="text"
            placeholder="Select"
          />
        </div>
      </div>
    </>
  );
}
